import {typeChart, allTypes} from './data.js';

// Calculate combined type effectiveness based on the two selected types
export function calculateCombinedType(type1, type2) {
  if (!type1 && !type2) return null;
  
  // Initialize result
  const result = {
    deals2x: [],
    deals1x: [],
    dealsHalf: [],
    deals0x: [],
    takes4x: [],
    takes2x: [],
    takes1x: [],
    takesHalf: [],
    takesquarter: [],
    takes0x: []
  };
  
  // If only one type is selected
  if (!type2) {
    const singleTypeData = typeChart[type1];
    return {
      deals2x: singleTypeData.deals2x,
      deals1x: allTypes.filter(t => 
        !singleTypeData.deals2x.includes(t) && 
        !singleTypeData.dealsHalf.includes(t) && 
        !singleTypeData.deals0x.includes(t)
      ),
      dealsHalf: singleTypeData.dealsHalf,
      deals0x: singleTypeData.deals0x,
      takes4x: [],
      takes2x: singleTypeData.takes2x,
      takes1x: allTypes.filter(t => 
        !singleTypeData.takes2x.includes(t) && 
        !singleTypeData.takesHalf.includes(t) && 
        !singleTypeData.takes0x.includes(t)
      ),
      takesHalf: singleTypeData.takesHalf,
      takesquarter: [],
      takes0x: singleTypeData.takes0x
    };
  }
  
  // Calculate damage dealt (attack effectiveness)
  allTypes.forEach(defenseType => {
    const type1Effect = getOffensiveEffectiveness(type1, defenseType);
    const type2Effect = getOffensiveEffectiveness(type2, defenseType);
    const bestEffect = Math.max(type1Effect, type2Effect);;
    
    if (bestEffect === 0) {
      result.deals0x.push(defenseType);
    } else if (bestEffect === 0.5) {
      result.dealsHalf.push(defenseType);
    } else if (bestEffect === 1) {
      result.deals1x.push(defenseType);
    } else if (bestEffect === 2) {
      result.deals2x.push(defenseType);
    }
  });

  // Calculate defensive weaknesses (damage taken)
  allTypes.forEach(attackType => {
    const type1Effect = getDefensiveEffectiveness(type1, attackType);
    const type2Effect = getDefensiveEffectiveness(type2, attackType);
    const combinedEffect = type1Effect * type2Effect;
    
    if (combinedEffect === 0) {
      result.takes0x.push(attackType);
    } else if (combinedEffect === 0.25) { 
      result.takesquarter.push(attackType);
    } else if (combinedEffect === 0.5) {
      result.takesHalf.push(attackType);
    } else if (combinedEffect === 1) {
      result.takes1x.push(attackType);
    } else if (combinedEffect === 2) {
      result.takes2x.push(attackType);
    } else if (combinedEffect === 4) {
      result.takes4x.push(attackType);
    }
  });
  
  // Remove duplicates and sort
  result.deals2x = [...new Set(result.deals2x)].sort();
  result.deals1x = [...new Set(result.deals1x)].sort();
  result.dealsHalf = [...new Set(result.dealsHalf)].sort();
  result.deals0x = [...new Set(result.deals0x)].sort();
  result.takes4x = [...new Set(result.takes4x)].sort();
  result.takes2x = [...new Set(result.takes2x)].sort();
  result.takes1x = [...new Set(result.takes1x)].sort();
  result.takesHalf = [...new Set(result.takesHalf)].sort();
  result.takesquarter = [...new Set(result.takesquarter)].sort();
  result.takes0x = [...new Set(result.takes0x)].sort();
  
  // Remove 0x from other categories
  result.deals2x = result.deals2x.filter(t => !result.deals0x.includes(t));
  result.deals1x = result.deals1x.filter(t => !result.deals0x.includes(t));
  result.dealsHalf = result.dealsHalf.filter(t => !result.deals0x.includes(t));
  
  result.takes4x = result.takes4x.filter(t => !result.takes0x.includes(t));
  result.takes2x = result.takes2x.filter(t => !result.takes0x.includes(t));
  result.takes1x = result.takes1x.filter(t => !result.takes0x.includes(t));
  result.takesHalf = result.takesHalf.filter(t => !result.takes0x.includes(t));
  result.takesquarter = result.takesquarter.filter(t => !result.takes0x.includes(t));
  
  return result;
}

// Helper function to get offensive effectiveness (attack)
export function getOffensiveEffectiveness(attackType, defenseType) {
  const defenseData = typeChart[defenseType];
  
  if (defenseData.takes0x.includes(attackType)) return 0;
  if (defenseData.takesHalf.includes(attackType)) return 0.5;
  
  const attackData = typeChart[attackType];
  if (attackData.deals2x.includes(defenseType)) return 2;
  if (attackData.dealsHalf.includes(defenseType)) return 0.5;
  if (attackData.deals0x.includes(defenseType)) return 0;
  
  return 1;
}

// Helper function to get defensive effectiveness (defense)
export function getDefensiveEffectiveness(defenseType, attackType) {
  const defenseData = typeChart[defenseType];
  
  if (defenseData.takes0x.includes(attackType)) return 0;
  if (defenseData.takesHalf.includes(attackType)) return 0.5;
  if (defenseData.takes2x.includes(attackType)) return 2;
  
  return 1;
}