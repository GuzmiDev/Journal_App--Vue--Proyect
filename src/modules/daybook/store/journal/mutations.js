// export const myGetter = (state) =>{
//
// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};
export const updateEntry = (state, entryUpdated) => {
  // state.entries = state.entries.map((entry) =>
  //   entry.id === entryUpdated.id ? entryUpdated : entry
  // );

  const idx = state.entries.map((e) => e.id).indexOf(entryUpdated.id);
  state.entries[idx] = entryUpdated;
};
export const addEntry = (/*state*/) => {};
