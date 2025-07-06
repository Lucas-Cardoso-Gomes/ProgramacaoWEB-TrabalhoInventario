package br.com.shadowlegend.InventarioWeb;

import br.com.shadowlegend.InventarioWeb.Computador;
import br.com.shadowlegend.InventarioWeb.ComputadorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/computadores")
@CrossOrigin(origins = "http://localhost:4200")
public class ComputadorController {

    private final ComputadorRepository repository;

    public ComputadorController(ComputadorRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Computador> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Computador criar(@RequestBody Computador computador) {
        return repository.save(computador);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Computador> buscarPorId(@PathVariable Long id) {
        Optional<Computador> computador = repository.findById(id);
        return computador.map(ResponseEntity::ok)
                         .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Computador> atualizar(@PathVariable Long id, @RequestBody Computador computadorAtualizado) {
        return repository.findById(id)
                .map(c -> {
                    c.setUsuario(computadorAtualizado.getUsuario());
                    c.setProcessador(computadorAtualizado.getProcessador());
                    c.setSistemaOperacional(computadorAtualizado.getSistemaOperacional());
                    c.setRam(computadorAtualizado.getRam());
                    c.setDataCadastro(computadorAtualizado.getDataCadastro());
                    return ResponseEntity.ok(repository.save(c));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        return repository.findById(id)
                .map(c -> {
                    repository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
