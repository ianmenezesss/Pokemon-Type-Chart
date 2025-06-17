// All Pokémon types
export const allTypes = [
  "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
  "Fighting", "Poison", "Ground", "Flying", "Psychic", 
  "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
];

// Type chart data for single types
export const typeChart = {
  "Normal": {
    deals2x: [],
    dealsHalf: ["Rock", "Steel"],
    deals0x: ["Ghost"],
    takes4x: [],
    takes2x: ["Fighting"],
    takesHalf: [],
    takes0x: ["Ghost"]
  },
  "Fire": {
    deals2x: ["Grass", "Ice", "Bug", "Steel"],
    dealsHalf: ["Fire", "Water", "Rock", "Dragon"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Water", "Ground", "Rock"],
    takesHalf: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    takes0x: []
  },
  "Water": {
    deals2x: ["Fire", "Ground", "Rock"],
    dealsHalf: ["Water", "Grass", "Dragon"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Electric", "Grass"],
    takesHalf: ["Fire", "Water", "Ice", "Steel"],
    takes0x: []
  },
  "Electric": {
    deals2x: ["Water", "Flying"],
    dealsHalf: ["Electric", "Grass", "Dragon"],
    deals0x: ["Ground"],
    takes4x: [],
    takes2x: ["Ground"],
    takesHalf: ["Electric", "Flying", "Steel"],
    takes0x: []
  },
  "Grass": {
    deals2x: ["Water", "Ground", "Rock"],
    dealsHalf: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    takesHalf: ["Water", "Electric", "Grass", "Ground"],
    takes0x: []
  },
  "Ice": {
    deals2x: ["Grass", "Ground", "Flying", "Dragon"],
    dealsHalf: ["Fire", "Water", "Ice", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Fire", "Fighting", "Rock", "Steel"],
    takesHalf: ["Ice"],
    takes0x: []
  },
  "Fighting": {
    deals2x: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    dealsHalf: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    deals0x: ["Ghost"],
    takes4x: [],
    takes2x: ["Flying", "Psychic", "Fairy"],
    takesHalf: ["Bug", "Rock", "Dark"],
    takes0x: []
  },
  "Poison": {
    deals2x: ["Grass", "Fairy"],
    dealsHalf: ["Poison", "Ground", "Rock", "Ghost"],
    deals0x: ["Steel"],
    takes4x: [],
    takes2x: ["Ground", "Psychic"],
    takesHalf: ["Fighting", "Poison", "Bug", "Grass", "Fairy"],
    takes0x: []
  },
  "Ground": {
    deals2x: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    dealsHalf: ["Grass", "Bug"],
    deals0x: ["Flying"],
    takes4x: [],
    takes2x: ["Water", "Grass", "Ice"],
    takesHalf: ["Poison", "Rock"],
    takes0x: ["Electric"]
  },
  "Flying": {
    deals2x: ["Grass", "Fighting", "Bug"],
    dealsHalf: ["Electric", "Rock", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Electric", "Ice", "Rock"],
    takesHalf: ["Grass", "Fighting", "Bug"],
    takes0x: ["Ground"]
  },
  "Psychic": {
    deals2x: ["Fighting", "Poison"],
    dealsHalf: ["Psychic", "Steel"],
    deals0x: ["Dark"],
    takes4x: [],
    takes2x: ["Bug", "Ghost", "Dark"],
    takesHalf: ["Fighting", "Psychic"],
    takes0x: []
  },
  "Bug": {
    deals2x: ["Grass", "Psychic", "Dark"],
    dealsHalf: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Fire", "Flying", "Rock"],
    takesHalf: ["Fighting", "Grass", "Ground"],
    takes0x: []
  },
  "Rock": {
    deals2x: ["Fire", "Ice", "Flying", "Bug"],
    dealsHalf: ["Fighting", "Ground", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    takesHalf: ["Normal", "Fire", "Poison", "Flying"],
    takes0x: []
  },
  "Ghost": {
    deals2x: ["Psychic", "Ghost"],
    dealsHalf: ["Dark"],
    deals0x: ["Normal"],
    takes4x: [],
    takes2x: ["Ghost", "Dark"],
    takesHalf: ["Poison", "Bug"],
    takes0x: ["Normal", "Fighting"]
  },
  "Dragon": {
    deals2x: ["Dragon"],
    dealsHalf: ["Steel"],
    deals0x: ["Fairy"],
    takes4x: [],
    takes2x: ["Ice", "Dragon", "Fairy"],
    takesHalf: ["Fire", "Water", "Electric", "Grass"],
    takes0x: []
  },
  "Dark": {
    deals2x: ["Psychic", "Ghost"],
    dealsHalf: ["Fighting", "Dark", "Fairy"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Fighting", "Bug", "Fairy"],
    takesHalf: ["Ghost", "Dark"],
    takes0x: ["Psychic"]
  },
  "Steel": {
    deals2x: ["Ice", "Rock", "Fairy"],
    dealsHalf: ["Fire", "Water", "Electric", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Fire", "Fighting", "Ground"],
    takesHalf: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
    takes0x: ["Poison"]
  },
  "Fairy": {
    deals2x: ["Fighting", "Dragon", "Dark"],
    dealsHalf: ["Fire", "Poison", "Steel"],
    deals0x: [],
    takes4x: [],
    takes2x: ["Poison", "Steel"],
    takesHalf: ["Fighting", "Bug", "Dark"],
    takes0x: ["Dragon"]
  }
};

