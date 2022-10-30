
package com.portfolio.cgas.Interface;

import com.portfolio.cgas.entity.Persona;
import java.util.List;

/**
 *
 * @author User
 */
public interface IPersonaService {
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un tipo de persona
    public void savePersona(Persona persona);
    
    //Eliminar un Usuario por ID
    public void deletePersona(Long id);
    
    //Buscar Persona
    public Persona findPersona(Long id);
}
