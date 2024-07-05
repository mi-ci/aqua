package com.wintershop.shop.model;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    // Getter and Setter methods
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // UserDetails 인터페이스 메서드 구현
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null; // 역할을 반환해야 한다면, 적절한 권한 리스트를 반환해야 합니다.
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // 계정이 만료되지 않았는지 여부를 반환
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // 계정이 잠겨 있지 않은지 여부를 반환
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // 자격 증명이 만료되지 않았는지 여부를 반환
    }

    @Override
    public boolean isEnabled() {
        return true; // 계정이 활성화되어 있는지 여부를 반환
    }
}