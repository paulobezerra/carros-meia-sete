package br.com.carros67.api.Controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController implements ErrorController {

    @RequestMapping(value = "${server.error.path:${error.path:/error}}")
    public String error() {
        System.out.println("Error");
        return "forward:/index.html";
    }
}
