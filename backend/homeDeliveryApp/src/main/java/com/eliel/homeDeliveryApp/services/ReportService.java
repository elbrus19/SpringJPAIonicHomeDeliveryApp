package com.eliel.homeDeliveryApp.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.eliel.homeDeliveryApp.entity.dao.IOrderDao;
import com.eliel.homeDeliveryApp.entity.models.Order;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class ReportService {
	
	@Autowired
    private IOrderDao orderDao;
	

    public String exportReport(String reportFormat) throws FileNotFoundException, JRException, SQLException {

    	//Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost/homeDeliveryApp", "postgres", "1234");
        String path = "C:\\Users\\eliel\\Documents\\2DAM\\SpringIonicJPAHomeDeliveryApp\\SpringJPAIonicHomeDeliveryApp\\frontend\\HomeDeliveryApp\\src\\assets";
        List<Order> orders = orderDao.findAll();
        //load file and compile it
        File file = ResourceUtils.getFile("classpath:orders.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(orders);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "HomeDeliveryApp");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
        if (reportFormat.equalsIgnoreCase("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\orders.html");
        }
        if (reportFormat.equalsIgnoreCase("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\orders.pdf");
        }

        return "report generated in path : " + path;
    }
}
