// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function that returns an object based off the parameters entered.
const pAequorFactory = (num, array) => {
  return {
    specimenNum: num, 
    dna: array,
    // .mutate() selects a base in the object’s dna property and changes the current base to a different base. Then returns the object’s altered dna.
    mutuate() {
      let currentBaseIndex = Math.floor(Math.random() * 4)
      let currentBase = this.dna[currentBaseIndex]
      let newBase = returnRandBase();
      while (newBase === currentBase) {
        newBase = dnaBases[Math.floor(Math.random() * 4)];
      }
      this.dna[currentBaseIndex] = newBase;
    },
    // Compare the current dna with the passed in dna and compute how many bases are identical and in the same locations. Then prints a message with the % of DNA in common.
    compare(pAequorObject) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (pAequorObject.dna[i] === this.dna[i]) {
          count++;
        }; 
      };
      let result = Math.ceil(count / 15 * 100);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${result}% DNA in common.`);
    },
    // .willLikelySurvive() returns true if the object’s dna array contains at least 60% 'C' or 'G' bases.
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          count++;
        }
      };
      let result = Math.ceil(count / 15 * 100);
      if (result >= 60) {
        return true;
      } else {
        return false;
      };
    },
    // Returns the complementary DNA strand
    complementStrand() {
      let newStrand = [];
      this.dna.forEach(element => {
        if (element === 'A') {
          newStrand.push('T');
        } else if (element === 'T') {
          newStrand.push('A');
        } else if (element === 'C') {
          newStrand.push('G');
        } else if (element === 'G') {
          newStrand.push('C');
        }
      });
      return newStrand;
    }
  }
}


// Create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
let pAequorStrands = [];
for (let i = 0; i < 30; i++){
  const newStrand = pAequorFactory(i, mockUpStrand())
  pAequorStrands.push(newStrand);
};


// Print each specimen and their strand within the array.
pAequorStrands.forEach(element => console.log(`Specimen Number #${element.specimenNum}'s DNA consists of the following strand: ${element.dna}`));










