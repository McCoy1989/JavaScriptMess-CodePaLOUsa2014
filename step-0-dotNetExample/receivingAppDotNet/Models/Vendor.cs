﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace receivingAppDotNet.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address1 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

    }
}