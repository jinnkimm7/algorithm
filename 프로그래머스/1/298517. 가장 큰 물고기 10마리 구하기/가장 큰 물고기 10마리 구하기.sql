SELECT ID, LENGTH
FROM FISH_INFO
WHERE LENGTH >= 10
ORDER BY LENGTH DESC, ID
LIMIT 10
;
