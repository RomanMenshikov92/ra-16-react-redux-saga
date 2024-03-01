import React from "react";
import { PropsNewsItem } from "../types/types";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { GrView } from "react-icons/gr";

export const NewsCard: React.FC<PropsNewsItem> = ({ newsItem }) => {
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const monthName = getMonthName(month);
    return `${day} ${monthName} в ${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  const getMonthName = (month: number): string => {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    return months[month];
  };

  const title: string = "Университет интернет-профессий Нетология";
  const iconUrl: string = "https://static.tildacdn.com/tild3639-3163-4538-b361-393934633861/Logo-new.svg";

  const decodeEntities = (text: string): JSX.Element => {
    const element = document.createElement("div");
    element.innerHTML = text;

    const links = /(https?:\/\/[^\s]+)/g;
    const mnemonics = /&[^;]+;/g;

    const foundLinks = text.match(links);
    const foundMnemonics = text.match(mnemonics);

    if (foundLinks) {
      foundLinks.forEach((link) => {
        text = text.replace(link, `<a class="newsfeed__item-text-link" href="${link}" target="_blank">Перейти по ссылке</a>`);
      });
    }

    if (foundMnemonics) {
      foundMnemonics.forEach((mnemonic) => {
        text = text.replace(mnemonic, `<span class="newsfeed__item-text-symbol">${mnemonic}</span>`);
      });
    }

    return <p className="newsfeed__item-text" dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <li className="newsfeed__item">
      <span className="newsfeed__item-arrow">
        <IoIosArrowDown />
      </span>
      <div className="newsfeed__item-header">
        <img className="newsfeed__item-header-img" src={iconUrl} alt="Иконка Нетология" />
        <div className="newsfeed__item-header-wrapper">
          <h3 className="newsfeed__item-header-name">{title}</h3>
          <time className="newsfeed__item-header-time">{formatDate(newsItem.date)}</time>
        </div>
      </div>
      <>{decodeEntities(newsItem.text)}</>
      <div className="newsfeed__item-footer">
        <div className="newsfeed__item-footer-likes">
          <IoMdHeartEmpty /> {newsItem.likes.count}
        </div>
        <div className="newsfeed__item-footer-comments">
          <FaRegCommentAlt /> {newsItem.comments.count}
        </div>
        <div className="newsfeed__item-footer-reposts">
          <PiShareFatLight /> {newsItem.reposts.count}
        </div>
        <div className="newsfeed__item-footer-views">
          <GrView /> {newsItem.views.count}
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
