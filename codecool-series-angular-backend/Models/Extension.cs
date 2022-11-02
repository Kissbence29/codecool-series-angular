namespace codecool_series_angular_backend.Models;

public static class Extension
{
    public static void CreateDbIfNotExists(this IHost host)
    {
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<codecoolseriesContext>();
                context.Database.EnsureCreated();

            }
        }
    }
}