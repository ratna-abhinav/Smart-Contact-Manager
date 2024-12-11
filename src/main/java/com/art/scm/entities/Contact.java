package com.art.scm.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contact {

    @Id
    private String id;

    private String name;

    private String email;

    private String phoneNumber;

    private String address;

    private String picture;

    @Column(length = 1000)
    private String description;

    private boolean favorite = false;

    private String firebaseImageLink;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "contact", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private List<SocialLink> links = new ArrayList<>();
}
