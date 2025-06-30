package com.rematrik.rematrik_backend.controller;

import org.springframework.http.HttpStatus;
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
public class AuthController {

    // DTO simples para receber as credenciais de login
    public static class LoginRequest {
        public String usuario;
        public String senha;
    }

    @PostMapping("/login")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // ATENÇÃO: Este é um sistema de autenticação SIMPLES para fins didáticos.
        // Em um projeto real, você deve usar um sistema de gerenciamento de senhas
        // com hash (ex: BCrypt) e buscar o usuário de um banco de dados.
        if ("admin".equals(loginRequest.usuario) && "admin123".equals(loginRequest.senha)) {
            // Em uma aplicação real, aqui você geraria um token (JWT, por exemplo)
            // e o retornaria para o cliente.
            return ResponseEntity.ok("Login bem-sucedido");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha inválidos");
        }
    }
}