
--
-- База данных: `task_tz`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `email`) VALUES
(1, 'ivan@moguta.ru'),
(2, 'petr@moguta.ru'),
(3, 'anton@moguta.ru'),
(4, 'boris@moguta.ru'),
(5, 'ivanov@moguta.ru');

-- --------------------------------------------------------

--
-- Структура таблицы `user_info`
--

CREATE TABLE IF NOT EXISTS `user_info` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `sname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_info`
--

INSERT INTO `user_info` (`user_id`, `name`, `sname`) VALUES
(1, 'Иван', 'Петрович'),
(2, 'Петр', 'Константинович'),
(3, 'Антон', 'Викторович'),
(4, 'Борис', 'Николаевич'),
(5, 'Игорь', 'Васильевич');

