package com.digital.crud.saladereuniao.controller;

import com.digital.crud.saladereuniao.entities.Sala;
import com.digital.crud.saladereuniao.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/sala")
public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @GetMapping
    public Iterable<Sala> buscarTodasAsSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sala> buscarSalaPorId(@PathVariable Long id) {
        return salaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Sala criarSala(@RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sala> atualizarSala(@PathVariable Long id, @RequestBody Sala salaAtualizada) {
        return salaRepository.findById(id)
                .map(sala -> {
                    sala.setNome(salaAtualizada.getNome());
                    sala.setData(salaAtualizada.getData());
                    sala.setHora(salaAtualizada.getHora());
                    return ResponseEntity.ok(salaRepository.save(sala));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deletarSala(@PathVariable Long id) {
        salaRepository.deleteById(id);
    }
}
