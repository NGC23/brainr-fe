import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class Post {
public id: number;
public name: string;
public description: string;
public content: string;
public createdAt: Date;

  constructor(
   id: number,
   name: string,
   description: string,
   content: string,
   createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.content = content;
    this.createdAt = createdAt;
  }

  getId(): number
  {
   return this.id;
  }

  getName(): string
  {
   return this.name;
  }

  getDescription(): string
  {
   return this.description;
  }

  getContent(): string
  {
   return this.content;
  }

  getCreateAt(): Date
  {
   return this.createdAt;
  }
}