// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Punk extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Punk entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Punk entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Punk", id.toString(), this);
  }

  static load(id: string): Punk | null {
    return store.get("Punk", id) as Punk | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get totalOwners(): BigInt {
    let value = this.get("totalOwners");
    return value.toBigInt();
  }

  set totalOwners(value: BigInt) {
    this.set("totalOwners", Value.fromBigInt(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalPunks(): BigInt {
    let value = this.get("totalPunks");
    return value.toBigInt();
  }

  set totalPunks(value: BigInt) {
    this.set("totalPunks", Value.fromBigInt(value));
  }

  get punks(): Array<string | null> {
    let value = this.get("punks");
    return value.toStringArray();
  }

  set punks(value: Array<string | null>) {
    this.set("punks", Value.fromStringArray(value));
  }
}
