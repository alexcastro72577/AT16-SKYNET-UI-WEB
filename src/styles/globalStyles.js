import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

   
    .main-container {
        display: flex;
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        
      }
      main {
        padding-top: 50px;
        padding-right: 30px;
        padding-bottom: 50px;
        padding-left: 200px;
        @media (max-width: 800px){
            padding-left: 50px;
        }
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
      }
      
      .title {
        font-size: 3rem;
        display: grid;
        place-items: center;
      }
      .textLink {
        font-size: 1rem;
        display: grid;
        place-items: left;
        color: ${({ theme }) => theme.text};
      }
      
      /* Sidebar */
      .sidebar {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        height: 100vh;
        @media (max-width: 800px){
            height: 130vh;
        }
        overflow-y: auto;
      }
      
      .top_section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px;
      }
      .logo {
        font-size: 18px;
        line-height: 0;
      }
      .bars {
        width: 30px;
      }
      .hide {
        display: none;
      }
      
      .search {
        display: flex;
        align-items: center;
        margin: 10px 0;
        height: 30px;
        padding: 10px;
      }
      .search input {
        border: none;
        margin-left: 10px;
        border-radius: 5px;
        background: rgb(238, 238, 238);
      
        color: white;
      }
      
      .routes {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .link {
        display: flex;
        color: ${({ theme }) => theme.text};
        gap: 10px;
        padding: 5px 10px;
        border-right: 4px solid transparent;
        transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }
      .link:hover {
        border-right: 4px solid white;
        background: ${({ theme }) => theme.primary};
        transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }
      .active {
        border-right: 4px solid white;
        background: ${({ theme }) => theme.primary};
      }
      .link_text {
        white-space: nowrap;
        font-size: 15px;
      }
      
      .menu {
        display: flex;
        color: ${({ theme }) => theme.text};
      
        padding: 5px 10px;
        border-right: 4px solid transparent;
        transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        justify-content: space-between;
      }
      .menu_item {
        display: flex;
        gap: 10px;
      }
      .menu_container {
        display: flex;
        flex-direction: column;
      }
      .menu_container .link {
        padding-left: 20px;
        border-bottom: ${({ theme }) => theme.bg2};
      }
`;
