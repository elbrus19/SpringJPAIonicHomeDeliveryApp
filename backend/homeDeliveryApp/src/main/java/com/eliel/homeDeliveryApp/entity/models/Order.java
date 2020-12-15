package com.eliel.homeDeliveryApp.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long numOrder;

	@Column
	private String dateOrder;

	@Column
	private String dateDelivery;

	@Column
	private String status;

	@Column
	private String description;

	public Order() {
	}

	public Order(String dateOrder, String dateDelivery, String status, String description) {
		super();
		this.dateOrder = dateOrder;
		this.dateDelivery = dateDelivery;
		this.status = status;
		this.description = description;
	}

	public long getNumOrder() {
		return numOrder;
	}

	public void setNumOrder(long numOrder) {
		this.numOrder = numOrder;
	}

	public String getDateOrder() {
		return dateOrder;
	}

	public void setDateOrder(String dateOrder) {
		this.dateOrder = dateOrder;
	}

	public String getDateDelivery() {
		return dateDelivery;
	}

	public void setDateDelivery(String dateDelivery) {
		this.dateDelivery = dateDelivery;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
