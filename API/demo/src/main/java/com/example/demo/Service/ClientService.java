package com.example.demo.Service;

import com.example.demo.Model.Client;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class ClientService {

    @GetMapping
    public List<Client> getClient(){
        return List.of(
                new Client(
                        1L,
                        "pagadamf",
                        "pagadamf@gmail.com",
                        "Frederick",
                        "Pagadam"
                )
        );
    }


}
