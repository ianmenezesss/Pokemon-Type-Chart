import { calculateCombinedType } from './logic.js';
import { allTypes } from './data.js';

// Initialize type selectors and event listeners
document.addEventListener('DOMContentLoaded', function() {
  const type1Select = document.getElementById('type1');
  const type2Select = document.getElementById('type2');
  let currentType1 = '';
  let currentType2 = '';

  // Populate type selectors
  allTypes.forEach(type => {
    const option1 = document.createElement('option');
    option1.value = type;
    option1.textContent = type;
    type1Select.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = type;
    option2.textContent = type;
    type2Select.appendChild(option2);
  });

  // Event listeners
  type1Select.addEventListener('change', function() {
    if (this.value === currentType2) { // Prevent same type selection
      this.value = currentType1; // Reset to previous type
      return;
    }
    currentType1 = this.value;
    updateTypeChart();
  });

  type2Select.addEventListener('change', function() {
    if (this.value === currentType1) { // Prevent same type selection
      this.value = currentType2; // Reset to previous type
      return;
    }
    currentType2 = this.value;
    updateTypeChart();
  });
  
  function updateTypeChart() {
    type1Select.value = currentType1;
    type2Select.value = currentType2;
    
    const typeData = calculateCombinedType(currentType1, currentType2); 
    
    if (!typeData) {
      clearAllSections();
      return;
    }
    
    // Update each section
    updateTypeSection('deals-2x', typeData.deals2x);
    updateTypeSection('deals-1x', typeData.deals1x);
    updateTypeSection('deals-half', typeData.dealsHalf);
    updateTypeSection('deals-0x', typeData.deals0x);
    updateTypeSection('takes-4x', typeData.takes4x);
    updateTypeSection('takes-2x', typeData.takes2x);
    updateTypeSection('takes-1x', typeData.takes1x);
    updateTypeSection('takes-half', typeData.takesHalf);
    updateTypeSection('takes-quarter', typeData.takesquarter);
    updateTypeSection('takes-0', typeData.takes0x);
    
    updateTypeHeader(currentType1, currentType2);
  }

  // Function to update the header with selected types
  function updateTypeHeader(type1, type2) {
    const header = document.querySelector('.selected-types');
    header.innerHTML = '';
    
    if (type1) {
      const type1Pill = document.createElement('span');
      type1Pill.className = `type-pill type-${type1.toLowerCase()}`;
      type1Pill.textContent = type1;
      header.appendChild(type1Pill);
    }
    
    if (type2) {
      const plus = document.createElement('span');
      plus.textContent = ' + ';
      plus.style.margin = '0 5px';
      header.appendChild(plus);
      
      const type2Pill = document.createElement('span');
      type2Pill.className = `type-pill type-${type2.toLowerCase()}`;
      type2Pill.textContent = type2;
      header.appendChild(type2Pill);
    }
    
    if (!type1 && !type2) {
      header.textContent = 'Select the types to see weaknesses';
    }
  }

  // Function to update None type section 
  function updateTypeSection(sectionId, types) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';
    
    if (types.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.textContent = 'None';
      emptyMsg.className = 'empty-message';
      section.appendChild(emptyMsg);
      return;
    }
    
    types.forEach(type => {
      const pill = document.createElement('span');
      pill.className = `type-pill type-${type.toLowerCase()}`;
      pill.textContent = type;
      section.appendChild(pill);
    });
  }

  // Function to clear all sections and reset the header
  function clearAllSections() {
    const sections = [
      'deals-2x', 'deals-1x', 'deals-half', 'deals-0x',
      ,'takes-4x','takes-2x', 'takes-1x', 'takes-half','takes-quarter', 'takes-0'
    ];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);

        section.innerHTML = '';
        if (section) {
        const emptyMsg = document.createElement('div');
        emptyMsg.textContent = 'None';
        emptyMsg.className = 'empty-message';
        section.appendChild(emptyMsg);
        }
  });
    
    document.querySelector('.selected-types').textContent = 'Select the types to see weaknesses';
  }
  
  // Initialize with empty chart
  clearAllSections();
});