using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Docente
    {
        [Key]
        public int idAsignatura { get; set; }
        public int idNota { get; set; }
        public int idSalon_clases { get; set; }
    }
}