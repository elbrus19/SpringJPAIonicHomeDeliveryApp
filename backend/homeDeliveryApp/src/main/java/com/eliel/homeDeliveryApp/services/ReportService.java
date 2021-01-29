package com.eliel.homeDeliveryApp.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

@Service
public class ReportService {

	public void exportReport() {
    	
		try {
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db_home_delivery_app?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC", "root", "e29666373");
			File file = ResourceUtils.getFile("reports/orders.jrxml");
	        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
	        Map<String, Object> parameters = new HashMap<>();
	        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, conn);
	        System.out.println(file.getParent());
	        JasperExportManager.exportReportToHtmlFile(jasperPrint, file.getParent() + "/orders.html");
	        JasperExportManager.exportReportToPdfFile(jasperPrint, file.getParent() + "/orders.pdf");
	        
	        System.out.println("File exported");
	        System.out.println("Report generated in path : " + file.getParent());
	        conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
	
}
