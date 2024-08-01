/**
 * @interface VideoItem
 */
export interface VideoItem {
    url: string;
    date: string;
}


/**
 * список видео для просмотра
 * @type {VideoItem[]}
 */
export const VideoProps: VideoItem[] = [{
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2024-07-21 10:26:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2024-07-20 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2024-07-19 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2024-07-20 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2024-07-20 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-07-20 05:24:00'
    },
]