import { dataToNavItemList } from "../../../../midterm-demo/utils/createHtmlElements.js";

const Navbar = (data) => `
    <ul class="navbar" id="navbar">
        ${dataToNavItemList(data).join("\n")}
    </ul>
`;

export default Navbar;
