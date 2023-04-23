import { loadWriterPaperDataOfType } from "../../../../midterm-demo/utils/loadData.js";
import { headlineOfType } from "../../../../midterm-demo/utils/createHeadline.js";
import { dataToPaperItemList } from "../../../../midterm-demo/utils/createHtmlElements.js";

const PaperDashboard = (context) => {
  const data = loadWriterPaperDataOfType(context);
  return `
      <div class="dashboard-news-state">
        <h3 class="state-headline">${headlineOfType(context)}</h3>
        <div class="state-wrapper">
          <div class="state-headers">
            <h3 class="state-header f2">Bài viết</h3>
            <h3 class="state-header f1">Nhãn</h3>
          </div>
          ${dataToPaperItemList(data, context).join("\n")}
        </div>
      </div>
    `;
};

export default PaperDashboard;
