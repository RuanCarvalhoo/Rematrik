package com.rematrik.rematrik_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationCode(String to, String code) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        // Construindo o e-mail
        String htmlMsg = "<div style='font-family: Arial, sans-serif; text-align: center; color: #333;'>"
                       + "<h2>Olá!</h2>"
                       + "<p>Esse é o seu código de verificação para o sistema Rematrik:</p>"
                       + "<div style='background-color: #f0f0f0; margin: 20px auto; padding: 15px; border-radius: 8px; max-width: 200px;'>"
                       + "  <h1 style='font-size: 36px; letter-spacing: 3px; margin: 0;'>" + code + "</h1>"
                       + "</div>"
                       + "<p style='font-size: 12px; color: #777;'>O código é válido por 10 minutos.</p>"
                       + "</div>";

        helper.setText(htmlMsg, true); // O true indica que o texto é HTML
        helper.setTo(to);
        helper.setSubject("Seu código de verificação - Rematrik");
        helper.setFrom("notificacoes.rematrik@gmail.com");

        mailSender.send(mimeMessage);
    }
}