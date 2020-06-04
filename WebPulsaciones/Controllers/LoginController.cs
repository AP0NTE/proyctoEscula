using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using WebPulsaciones.Config;
using WebPulsaciones.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace WebPulsaciones.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        PulsacionesContext _context;
        UserService _userService;
        JwtService _jwtService;
        public LoginController(PulsacionesContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("admin");
            if (admin == null) 
            {
                _context.Users.Add(new User() 
                { 
                    UserName="admin", 
                    Password="admin", 
                    Email="admin@gmail.com", 
                    Estado="AC", 
                    FirstName="Sebastian", 
                    LastName="Aponte", 
                    MobilePhone="3155921337",
                    Role ="admin"
                    }
                );
                var registrosGuardados=_context.SaveChanges();
            }
            _userService = new UserService(context);
            _jwtService = new JwtService(appSettings);
        }
        //Permite que la clase sea anonima
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(LoginInputModel model)
        {
            var user = _userService.Validate(model.Username, model.Password);
            if (user == null) return BadRequest("Usuario o Contraseña esta mal escrita");
            var response= _jwtService.GenerateToken(user);
            return Ok(response);
        }
    }
}
