FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 7206

ENV ASPNETCORE_URLS=http://*:7206

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-dotnet-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["codecool-series-angular-backend/codecool-series-angular-backend.csproj", "codecool-series-angular-backend/"]
RUN dotnet restore "codecool-series-angular-backend/codecool-series-angular-backend.csproj"
COPY . .
WORKDIR "/src/codecool-series-angular-backend"
RUN dotnet build "codecool-series-angular-backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "codecool-series-angular-backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "codecool-series-angular-backend.dll"]
