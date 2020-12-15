package com.eliel.homeDeliveryApp.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String name;

	@Column
	private String surname1;

	@Column
	private String surname2;

	@Column
	private int tlfn;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private String address;

	public User() {
	}

	public User(String name, String surname1, String surname2, int tlfn, String email, String password,
			String address) {
		super();
		this.name = name;
		this.surname1 = surname1;
		this.surname2 = surname2;
		this.tlfn = tlfn;
		this.email = email;
		this.password = password;
		this.address = address;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname1() {
		return surname1;
	}

	public void setSurname1(String surname1) {
		this.surname1 = surname1;
	}

	public String getSurname2() {
		return surname2;
	}

	public void setSurname2(String surname2) {
		this.surname2 = surname2;
	}

	public int getTlfn() {
		return tlfn;
	}

	public void setTlfn(int tlfn) {
		this.tlfn = tlfn;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
