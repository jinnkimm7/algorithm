-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME,
    CASE
        WHEN SEX_UPON_INTAKE = 'Neutered Male' THEN 'O'
        WHEN SEX_UPON_INTAKE = 'Spayed Female' THEN 'O'
        ELSE 'X'
    END AS 중성화
FROM ANIMAL_INS
ORDER BY ANIMAL_ID, NAME, 중성화
;