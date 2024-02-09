package com.UTad.Actividad4ADAT.Repository;

import com.UTad.Actividad4ADAT.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository  extends JpaRepository<Producto, Long> {
}
