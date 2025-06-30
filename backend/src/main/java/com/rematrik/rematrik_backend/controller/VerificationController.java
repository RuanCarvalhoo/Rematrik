package com.rematrik.rematrik_backend.controller;

import com.rematrik.rematrik_backend.service.EmailService;
import com.rematrik.rematrik_backend.service.VerificationCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class VerificationController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private VerificationCodeService verificationCodeService;

    @PostMapping("/send-verification-code")
    public ResponseEntity<String> sendVerificationCode(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        if (email == null || !email.endsWith("@discente.ifpe.edu.br")) {
            return ResponseEntity.badRequest().body("O e-mail deve ser do domínio @discente.ifpe.edu.br");
        }
        String code = verificationCodeService.generateVerificationCode(email);
        try {
            emailService.sendVerificationCode(email, code);
            return ResponseEntity.ok("Código de verificação enviado para " + email);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Erro ao enviar o e-mail.");
        }
    }
    @PostMapping("/verify-code")
    public ResponseEntity<String> verifyCode(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String code = payload.get("code");

        boolean isCodeValid = verificationCodeService.verifyCode(email, code);

        if (isCodeValid) {
            return ResponseEntity.ok("Código verificado com sucesso.");
        } else {
            return ResponseEntity.badRequest().body("Código de verificação inválido.");
        }
    }
}