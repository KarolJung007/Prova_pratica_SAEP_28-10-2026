package com.saepvision.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class VisionSaepController {

    
    public static class LoginRequest {
        public String email;
        public String senha;
    }

    
    public static class PublicacaoDTO {
        public Long id;
        public String titulo;
        public String imagemUrl;
        public String localizacao;
        public String fotografoNome;
        public Long fotografoId;
        public int curtidasCount;
        public boolean likedByMe;
    }

    
    @GetMapping("/publicacoes")
    public ResponseEntity<List<PublicacaoDTO>> getPublicacoes() {
        
        List<PublicacaoDTO> lista = new ArrayList<>();
        
        return ResponseEntity.ok(lista);
    }

    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        
        if ("admin@saep.com".equals(request.email) && "123456".equals(request.senha)) {
            return ResponseEntity.ok().body("{\"id\": 1, \"nome\": \"@fotografo1\", \"tipo\": \"FOTOGRAFO\"}");
        }
        return ResponseEntity.status(401).body("Credenciais inválidas");
    }

    
    @PostMapping("/publicacoes/{id}/curtir")
    public ResponseEntity<?> curtirPublicacao(@PathVariable Long id, @RequestBody java.util.Map<String, Long> payload) {
        Long usuarioId = payload.get("usuarioId");
        
        return ResponseEntity.ok().build();
    }


    @PostMapping("/publicacoes")
    public ResponseEntity<?> uploadFoto(
            @RequestParam("titulo") String titulo,
            @RequestParam("localizacao") String localizacao,
            @RequestParam("fotografoId") Long fotografoId,
            @RequestParam("imagem") MultipartFile file) {
        
        
        return ResponseEntity.ok().build();
    }

    
    @DeleteMapping("/publicacoes/{id}")
    public ResponseEntity<?> deletarFoto(@PathVariable Long id) {
        
        return ResponseEntity.ok().build();
    }
}