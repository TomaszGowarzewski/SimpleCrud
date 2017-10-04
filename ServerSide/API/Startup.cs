using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using API.Authentication;
using API.EF;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Services;
using Services.Interfaces;
using Services.Services;
using Swashbuckle.AspNetCore.Swagger;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<UserDbContext>(opt => opt.UseInMemoryDatabase());
            services.AddDbContext<Core.EF.PersonDbContext>(opt => opt.UseInMemoryDatabase());
            services.AddScoped<IPersonRepository,PersonRepository>();
            services.AddScoped<IPersonManagementRepository,PersonManagementRepository>();

            services.AddIdentity<IdentityUser, IdentityRole>()
            .AddEntityFrameworkStores<UserDbContext>();

            services.ConfigureApplicationCookie(c => c.Events.OnRedirectToLogin = ctx =>
            {
                ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                return Task.FromResult(0);
            });

            services.AddSwaggerGen(c =>
           {
               c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
               {
                   Title = "Simple API",
                   Version = "v1",
                   Description = "API",
                   TermsOfService = "None",
                   Contact = new Contact { Name = "Tomasz Gie", Email = "gowtomasz@o2.pl", Url = "http://tomaszgowarzewskidev.pl" }
               });
           });

            services.AddCors(options =>
                {
                    options.AddPolicy("CorsPolicy",
                        builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
                });
            services.AddMvc();
            services.AddScoped<IPersonRepository, PersonRepository>();
            services.AddScoped<IJsonLoader, JsonLoader>();
            services.Configure<JWTSettings>(Configuration.GetSection("JWTSettings"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();
            app.UseCors("CorsPolicy");

            app.UseSwagger();
            app.UseSwaggerUI(c =>
                            { c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                             });
            app.UseMvc();
        }
    }
}
