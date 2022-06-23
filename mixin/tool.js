
import dayjs from "dayjs";

export default {
    methods: {
        format(time) {
            return dayjs(time).format("YYYY-MM-DD");
        },
        typeFormat(type) {
            let data = {
                news: "新闻",
                notice: "公告",
                act: "活动",
            };
            return data[type];
        },
    }
}