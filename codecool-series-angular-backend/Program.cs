using codecool_series_angular_backend.DAL;
using codecool_series_angular_backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{

    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {

            policy.WithOrigins("http://localhost:4200", "https://localhost:4200").AllowAnyHeader().AllowAnyMethod();



        });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//configure program to use different database instances depending on dev or prod build.
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<codecoolseriesContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("codecool-series-development")));

}
else
{
    builder.Services.AddDbContext<codecoolseriesContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("codecool-series")));

}

builder.Services.AddScoped<IShowService, ShowService>();
builder.Services.AddScoped<IActorService, ActorService>();
builder.Services.AddControllers().AddJsonOptions(x =>
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddResponseCaching();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.CreateDbIfNotExists();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();

app.MapControllers();
app.UseResponseCaching();

app.Run();
