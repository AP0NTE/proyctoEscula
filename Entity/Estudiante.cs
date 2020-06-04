using System;
using System.ComponentModel.DataAnnotations;
using Entity;

namespace Entity {
    public class Estudiante : Persona {
        [Key]
        public int idAsignatura { get; set; }
        public int idNota { get; set; }
        public int idAccudiente { get; set; }
        public int idSalon_clases { get; set; }
        public string curso { get; set; }
    }
}