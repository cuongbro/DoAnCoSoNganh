﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KSBaoCuong2.Controllers
{
    public class MainController : Controller
    {
        // GET: Main
        public ActionResult DangKy()
        {
            return View();
        }
        public ActionResult DangNhap()
        {
            return View();
        }
        public ActionResult LayOut()
        {
            return View();
        }
        public ActionResult GiaoDien()
        {
            return View();
        }
    }
}