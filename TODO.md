# TODO: Implement Search Functionality in Navbar

## Tasks
- [x] Modify Home.jsx to add separate inputQuery state for search input
- [x] Update Navbar props in Home.jsx to use inputQuery and add onSearch handler
- [ ] Test the search functionality to ensure it works on click/enter

## Information Gathered
- Navbar.jsx already has search input, onChange, onKeyDown for Enter, and onClick for search icon
- Home.jsx currently has real-time search filtering based on searchQuery state
- To implement "search on search", separate the input from the actual search query

## Plan
- Add `inputQuery` state in Home.jsx
- Pass `inputQuery` as `searchQuery` prop to Navbar
- Pass `setInputQuery` as `setSearchQuery` prop to Navbar
- Add `onSearch` prop that sets `searchQuery` to `inputQuery`
- Keep `filteredProducts` using `searchQuery` for filtering

## Dependent Files
- frontend/src/pages/Home.jsx

## Followup Steps
- Test the search by typing in navbar and clicking search icon or pressing Enter
- Verify that products filter only after triggering search
