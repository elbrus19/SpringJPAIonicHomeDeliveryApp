package com.eliel.homeDeliveryApp.services;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	public void sendMail() {
		 
		try {
		  String to = "cebm@gmail.com"; // to address. It can be any like gmail, hotmail etc.
		  final String from = "cebm@gmail.com"; // from address. As this is using Gmail SMTP.
		  final String password = "E159753456852"; // password for from mail address. 
		 
		  Properties prop = new Properties();
		  prop.put("mail.smtp.host", "smtp.gmail.com");
		  prop.put("mail.smtp.port", "465");
		  prop.put("mail.smtp.auth", "true");
		  prop.put("mail.smtp.socketFactory.port", "465");
		  prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		 
		  Session session = Session.getInstance(prop, new javax.mail.Authenticator() {
		   protected PasswordAuthentication getPasswordAuthentication() {
		    return new PasswordAuthentication(from, password);
		   }
		  });
		 
		   Message message = new MimeMessage(session);
		   message.setFrom(new InternetAddress(from));
		   message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
		   message.setSubject("Mensaje desde el backend SpringJPAIonicHomeDeliveryApp");
		    
		   String msg = "Informe de los pedidos de HomeDeliveryApp";
		    
		   MimeBodyPart mimeBodyPart = new MimeBodyPart();
		   mimeBodyPart.setContent(msg, "text/html");
		     
		   Multipart multipart = new MimeMultipart();
		   multipart.addBodyPart(mimeBodyPart);
		    
		   MimeBodyPart attachmentBodyPart = new MimeBodyPart();
		   
			attachmentBodyPart.attachFile(new File("C://Users/eliel//Documents//2DAM//SpringIonicJPAHomeDeliveryApp//SpringJPAIonicHomeDeliveryApp//backend//homeDeliveryApp//reports//orders.pdf"));
		
		   multipart.addBodyPart(attachmentBodyPart);
		   message.setContent(multipart);
		 
		   Transport.send(message);
		 
		   System.out.println("Mail successfully sent..");
		 
		  } catch (MessagingException e) {
		   e.printStackTrace();
		  } catch (IOException e) {
			e.printStackTrace();
		  }
	}
}
