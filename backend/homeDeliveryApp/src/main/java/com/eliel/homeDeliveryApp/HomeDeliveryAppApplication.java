package com.eliel.homeDeliveryApp;

import java.io.FileNotFoundException;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.eliel.homeDeliveryApp.services.ReportService;

import net.sf.jasperreports.engine.JRException;

@SpringBootApplication
public class HomeDeliveryAppApplication {

	@Autowired
    private ReportService reportService;
	
	@GetMapping("/report/{format}")
	public String generateReport(@PathVariable String format) throws FileNotFoundException, JRException, SQLException {
        return reportService.exportReport(format);
    }
	
	public static void main(String[] args) {
		SpringApplication.run(HomeDeliveryAppApplication.class, args);
	}

}
