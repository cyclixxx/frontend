import { writable } from "svelte/store"

let default_walletEl = null
let coin_listEl = []

export let coin_list = writable(coin_listEl)
export let default_Wallet = writable(default_walletEl)