use secqs;
show tables;
describe questions;
describe co1;

update secqs.questions set question_id= 1 where question_id=0;

update secqs.questions set questions = "Are you a sec compeny" where question_id = 1;

update secqs.co1 set question_answer = "yes I am a sec compeny" where question_id = 1;
update secqs.co2 set question_answer = "no I am not sec compeny" where question_id = 1;
update secqs.co3 set question_answer = "I like to think of myself as a sec compeny" where question_id = 1;


update secqs.questions set questions = "Are you guys a scam" where question_id = 2;

update secqs.co1 set question_answer = "No ofc not" where question_id = 2;
update secqs.co2 set question_answer = "ig you will have to find out" where question_id = 2;
update secqs.co3 set question_answer = "I sure dont think so" where question_id = 2;


update secqs.grade set co1_q_grade = 5 where question_id = 1;
update secqs.grade set co2_q_grade = 0 where question_id = 1;
update secqs.grade set co3_q_grade = 3 where question_id = 1;


insert into secqs.grade(question_id)
values
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50),
(51),
(52),
(53),
(54),
(55),
(56),
(57),
(58),
(59),
(60),
(61),
(62),
(63),
(64),
(65),
(66),
(67),
(68),
(69),
(70),
(71),
(72),
(73),
(74),
(75),
(76),
(77),
(78),
(79),
(80),
(81),
(82),
(83),
(84),
(85),
(86),
(87),
(88),
(89),
(90),
(91),
(92),
(93),
(94),
(95),
(96),
(97),
(98),
(99),
(100),
(101),
(102),
(103),
(104),
(105),
(106),
(107),
(108),
(109),
(110),
(111),
(112),
(113),
(114),
(115),
(116),
(117),
(118),
(119),
(120),
(121),
(122),
(123),
(124),
(125),
(126),
(127),
(128),
(129),
(130),
(131),
(132),
(133),
(134),
(135),
(136),
(137),
(138),
(139),
(140),
(141),
(142),
(143),
(144),
(145),
(146),
(147),
(148),
(149),
(150),
(151),
(152),
(153),
(154),
(155),
(156),
(157),
(158),
(159),
(160),
(161),
(162),
(163),
(164),
(165),
(166),
(167),
(168),
(169),
(170),
(171),
(172),
(173),
(174),
(175);

select distinct q.questions, c1.question_answer,c2.question_answer,c3.question_answer 
from secqs.questions q, secqs.co1 c1,secqs.co2 c2,secqs.co3 c3
where q.question_id = c1.question_id
and q.question_id = c2.question_id
and q.question_id = c3.question_id;



select distinct q.questions, c1.question_answer,c2.question_answer,c3.question_answer 
from secqs.questions q, secqs.co1 c1,secqs.co2 c2,secqs.co3 c3
where c1.question_id = 1
and c2.question_id = 1
and c3.question_id = 1
and q.question_id = 1;

----------------------------------------------------------------------
select q.questions from secqs.questions q where q.question_id = 1;

select c1.question_answer
from secqs.co1 c1
where c1.question_id = 1;

select c2.question_answer
from secqs.co2 c2
where c2.question_id = 1;

select c3.question_answer
from secqs.co3 c3
where c3.question_id = 1;

------------------------------------------------------------------------------


select * from secqs.questions;
select * from secqs.co1;
select * from secqs.co2;
select * from secqs.co3;
select * from secqs.grade;
-- delete from secqs.questions;

