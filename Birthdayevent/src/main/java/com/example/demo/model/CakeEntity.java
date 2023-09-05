package com.example.demo.model;

//import java.time.LocalDate;
//import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Cake")
public class CakeEntity {

	@Id
	private int cakeid;
	private String flavor;
	private int weight;
	private String shape;
	private String filling;
	private int budget;
	public CakeEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CakeEntity(int cakeid, String flavor, int weight, String shape, String filling, int budget) {
		super();
		this.cakeid = cakeid;
		this.flavor = flavor;
		this.weight = weight;
		this.shape = shape;
		this.filling = filling;
		this.budget = budget;
	}
	public int getCakeid() {
		return cakeid;
	}
	public void setCakeid(int cakeid) {
		this.cakeid = cakeid;
	}
	public String getFlavor() {
		return flavor;
	}
	public void setFlavor(String flavor) {
		this.flavor = flavor;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public String getFilling() {
		return filling;
	}
	public void setFilling(String filling) {
		this.filling = filling;
	}
	public int getBudget() {
		return budget;
	}
	public void setBudget(int budget) {
		this.budget = budget;
	}
	
	
	
}
