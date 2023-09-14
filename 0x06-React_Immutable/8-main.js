import { Map } from 'immutable';
import printBestStudents from './8-seq';

const obj = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva'
  },
  2: {
    score: 70,
    firstName: 'Ali',
    lastName: 'Bira'
  },
  3: {
    score: 69,
    firstName: 'Derartu',
    lastName: 'Tulu'
  }
};

printBestStudents(obj);
