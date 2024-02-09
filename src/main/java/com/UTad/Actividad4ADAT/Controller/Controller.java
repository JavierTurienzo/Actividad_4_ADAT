package com.UTad.Actividad4ADAT.Controller;

import com.UTad.Actividad4ADAT.Model.Producto;
import com.UTad.Actividad4ADAT.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8080"})
public class Controller {

    @Autowired
    private Repository rep;

    @GetMapping()
    public String index(){
        return "CONECTADO";
    }

    @GetMapping("mostrar")
    public List<Producto> getProductos(){
        return rep.findAll();
    }

    @PostMapping("guardar")
    public boolean addProducto(@RequestBody Producto producto){
        rep.save(producto);
        return true;
    }

    @PutMapping("editar/{id}")
    public boolean updateProducto(@PathVariable Long id, @RequestBody Producto newProducto){
        Producto oldProducto = rep.findById(id).get();
        oldProducto.setNombre(newProducto.getNombre());
        oldProducto.setCantidad(newProducto.getCantidad());
        oldProducto.setPrecio(newProducto.getPrecio());
        oldProducto.setCategoria(newProducto.getCategoria());
        rep.save(oldProducto);
        return true;
    }

    @DeleteMapping("borrar/{id}")
    public boolean borrar(@PathVariable Long id){
        Producto p = rep.findById(id).get();
        rep.delete(p);
        return true;
    }
}
