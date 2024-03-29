extern crate wasm_bindgen;

extern crate strsim;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Dict {
    entries: Vec<String>,
    results: Vec<String>,
    last_read: usize,
}

#[wasm_bindgen]
impl Dict {
    pub fn new() -> Dict {
        Dict {
            entries: Vec::new(),
            results: Vec::new(),
            last_read: 0,
        }
    }

    pub fn insert(&mut self, name: &str) {
        self.entries.push(name.to_string());
    }

    pub fn compare(&mut self, name: &str, threshold: usize) -> usize {
        self.results = Vec::new();
        self.last_read = 0;

        for entry in &self.entries {
            let new_distance = strsim::levenshtein(name, &entry);
            if name == entry {
                return 0;
            }
            if new_distance <= threshold {
                self.results.push(entry.to_string());
            }
        }

        return self.results.len();
    }

    pub fn next(&mut self) -> String {
        if self.last_read >= self.results.len() {
            "".to_string()
        } else {
            self.last_read += 1;
            self.results[self.last_read - 1].clone()
        }
    }
}
