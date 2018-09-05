/**
 * start top sync
 * width 103, height 167
 */

var imgs = [
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAALCAYAAADRP7vCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmlJREFUeNrslz2LWkEUhkfv1fULv1ALG+3UQFaUbSWNthJhJSkUCwtrIV0a2wg2WqezMOw/ULaIEEtBJIWFIKJGQRAjIn7tZN5h5+Zm/4FrBoZ75s45F87je+aMGkopEaPZbH4YDofvptPp7Xg8vrPZbDc6nY7M53MSjUa/MXsfiUQaoVCo6Xa7z+SaB8CNRiN3qVR6DIfD1Gq1giTVaDT/PLVaLZUkicZiMVqtVr/OZjMTYq91agCtVqs91uv1t4vFgjBAyiYGA0fUqmTwiM/nI5lM5ns+n0+xPZn5nFgcV+DT05MEG3GwL11YLA+e1/l8vmF5nVhOssFg+K0pl8sPlUrlHtDUkGBjAuQzEL5mH+Brh8NBkskkYaVLTqcTn2p/9XcuvSKRO44siOZwOBC/3/9JbjQa98vlUlGaLMuKs5h6vZ4/AQ3BsFerFWm323yNGAHoWWn8G8L3whWnCEeIgUG81QIAgKg3hKoQBCigLBQnfgW832w2ZL1ec3+AF3DVZ8GlD8FCDOTJuXi9XjQHBQocIUuU3kvFiFI1Go1kt9sRk8lEzGYz9xegECMgvoZSRW5CGKISmWj2cjweJ51O52+3YIkej0euKMATDQHB2IMNaB6Ph2Sz2R+JROILmgMOTRbPtqU9GgYaAw5WvHsNtw/R/BgHyeVyDclkMrEWi8WfuHYwusr1AzauH1iLp9izWCy0UCj8uubriGL0+/03qVSK2u12ykqRQ8LdDZM1B8paMHU6nTSdTtPBYOC7Zmi8Ml8e4N1u967Van3u9Xrvt9str+lAINDHv4ZcLvcxGAwOyf9B/ggwAKI0sWTwxFswAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAABOCAYAAAD7J5y+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/pJREFUeNqcV0tLG1EUnjw0YjRifCW+oi4aECwICkKU7ipdqaCr/gL/ggsXXRe3BV2aH+BSulRDheIDq4JINWol1SBqfEYTb893zRlm1HrvOHDymLnfPeee853HuIQQhtPLbbzh8lr/rK+vty8sLIxeXFyEYEFfX9+31tbWRCgUytpQeAiZnZ39PDw8LMLhsKisrBTV1dWit7dXjI2N/eA1x8fHHnkcfCwtLXUNDQ2JoqIi4fV6cUjhcrmkNDc3i3g8Po51y8vLXSZoYmIiXltbKxezAIBvj8cjYrGY2N3drZmfn/8oQaurq539/f1SAxa43W6bNvwPBoNicnJS0FoBkHt7e/sD7SLPl8/njYeHBykEkFbg993dnZFIJIympqZHlyeTyZ50Oi0BtKsUBuE3rsvLS2Nzc9M4OzsLS9De3l7P+fm5uatUXwDiAhjX7e2tkcvlfBJEN3PMCl7AAN4E183NjXFwcNAtQeTmrNUUcsZj1L1eKXiGe2VlZUZDQ8OKBFEwf1Ew5QLsSibIDXBGCO7hu7i42CgvL09LUFVVVdLv90sPYUfSbHqOtZaWlkrPkaaMvLG1tRUBfeiBLbAcKwhxT0xPT48zneTH1NTUV9rJDCZTiBkxMDAgUqmUzwaiWNUMDg6au1sZ0dHRIebm5j4xwARBwKuRkRFBhzXNikajYmZmZtQKgJj5RGnwnej0heIxnslkpEPIs1ky7durSUimzGxsbIwTXaSbyTl/lOl+dHTUns0+Jili9b/6YQPd39/7eGGBvHlljSCABwFl8pJ4lJra2toScACABT6qNe3s7MSQAmSmfgkjLdfM6kJM1OYRIdeYsNoVFvUCqWFNPiWI8soM5mvabKCSkpIMFxeASNTeOz09beQSxnHTYYSfax/OpKWJ8ijL5ml7r66ubhMFhkFaNKKUaHxinpoRlBYB9py2eZFIZNFxz0Uz0GncNhCdx8dnKrAirwShGTg2z+fzXSMt2OVajKivr1/jrNXWRP2nE9UI59I+E1iOJHRkHjWuNJtm1m0V6PDwsPOJy9UgKsOnDNCuRujejrlHrfS3YxBYzofXrkY059VYa4QWiMa0n4iTNXuVjqBm/N46P2hpgvesAC0avWlaRgmzslyLe9TNZWpYc0rpiP39/W40NHQObfMqKipSjissd0JHrYZm2XeqhvZiA9ABPSWsX3WeZyCa+VaelDA1iKavkHVy1kr3q6urIOLkqCy3tLQsUpU1LPORmkboGjxHaFcjckCOU+O1kcAGomEqoCoqz0CBQOCv465BL1dJxyWMXhSjtvlbk+VZVVF5sWvwOKoNOjk5iaCpIVbaLkd3d1xYrG+ghd/el0D/BBgAAQO/gXFfVhcAAAAASUVORK5CYII=',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABOCAYAAAAU5feAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABCVJREFUeNqUVs9LG1EQfu6uRhOtVogYCUatggYUeggWRCoePFkoXioUevNQTy099G/wVKEHwYPgTckltxyEQqUFUaFSRQ16sFpFrSAqgtGs2/keO9vEtjtx4fF2k/ne/Ppm5pU4jqPu8xjqno9194e5ubkX29vbTy8vL2vr6+vXY7HYUm9vb9oTgEm8xsbGkolEwqmrq3NqamqclpYWB9/pdPoly3jCs7Oz79ra2uCQYxiG3ktKSvTe2dnpFAAymUxseHjYKS8v94TzV1lZmTM+Pj7tAWZmZt43Nzd7AgCZpunt+K21tVVr0U4vLS293NnZ0T6RGYoEVS6X874ty1IHBwcqlUq9NsicR3t7ezBSC2KHMITIFP1t27a6vb1Vi4uLr4ybm5tANptVpNqLHE7Fur6+1kCAAFhZWXlinZ6exk5OTvQpOpOkBcJ0kBZm09gCo7q6+mdtba0WghacBDDeIcya8R4KhZRRVVX1i0BZtpVNAhA7fsceCARUPB7/ZFA4D5uampYrKir+EMx1Ph8I8yjr05p83d3dUwQsZKXrC3aA6HTV1dWV0ift7u4+HB0d3UGmS0tLvWzn7xMTEx8LuJRMJt/QKfpPcIh5hDU4OOjs7+8HCwBYk5OTH9rb27UQKAHWDg0NOZSwHpYpqIeRkZG3ZF5ifn6+h0xTCERfX98UOfv1vwVEzn85Pj7WJyIHd0v4rxKliFh574pY+tkXQCeanAOElJx97AsgIRuCeMCnq6urB5IGz27Qu6OjI+0LIApksXMNbG5uDvgCyIwg7EdYYRJl/1w0CT5AGKBoNPrNF8DFw+WJplaUD7Cfw+wLIGctrjK38rK+vZUTp4lGRUPl+0M0iUtTF71h5ESTsCNCaDNHR0dxMUo4Hb0KkaJ2vyAOFE4cnKa+1VQ0l+D0+fl5vW+U2Emc7jpuiyYhaWwSvZsS+ULocqAHfKHpk/IFILOIEDRgra2tPfP1AaeyD24+slLiTESHfaG+uyDWNOzn/koTql8C5HjqYIkmoS9xE8NDfAqJGmA7V11DQ8N3MXE8GzCmMDR9ASQUYB5BC3EpIkaJZzVMopafEUuUJyqSd3FxERGpwR0DOwHCYsXxIIRJTBXfPECYux+oIgFMvs1Agx61UpTgMEDoGqurq8/FmqYhwtQuqnubwWCQeaQaGxuXxbBCA6IDH0R6kwaLQ+lef2zRBzjN9BbnNLMUZgEkcokAOZ4+AFPiAr4A0Jvvedipt0aLGlk4vbKyUkUikfWiyQc/RLZioKAOuDednZ1FxZpmh12NtmgSV5t7XzJ9o8T856oTLyfc6bjVbG1t9ftq+BcdfDWgNfIkxRKvcPmJg1kbGxsDIls5D3zvlgoox5l2tdhFXR34Zh8OhzOiBmaqO1isogYKRi+ew8PDgsvJbwEGADlp4DBCrLb6AAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAKCAYAAACpK0B9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+BJREFUeNrsV0tLW0EUnjx8RY0mPpJqVESIoFBRN2Khi4IbUXBtf0C6d9FFN9KlIC6KSJeFbgXpJi5cSHGRqjTQRaHio8Vo4ys+E40m3n7f2BNuSynNBQulXhhmcuacM2e+75yZic0wDGX129zc9MzNzT1dXFx8HIvFAplMRiUSCVVaWqpOT0+V3+9XVVVVqebm5sjAwMCz7u7uiLr7/vwjOVba6upqYGRk5ENDQ4Nht9tzjS6dTqfubTab7ouLi43h4eFMNBrttLrev9y2trZcVuycVghdX1/3jY2NLU1PT/uPjo7U9fW1loMM3VhBDodDZbNZVVBQoC4uLtTMzIzj/Pz8/dDQ0PP29vYw5tOXl5cu9NmTkxM/KmwN896ysrK9w8PDQDqddjc1NUWwsU74dwQCgWg8Hm+rrKyM7e/vt7hcrkMkQyaZTHrLy8v3oO9yu91xxBO4urpyIWmWNzY2HhQWFqZqa2s/7ezstFZXV6+hb4P+V9hmUd1+j8fzJZVKeWh7cHDQImvhJNCJ1NjYuCzrSg+fyd3d3Vav1/sZOk7+Pj4+vod9uqG/tL29fZ844OT4iPWCWDdRV1f3Ll+cbVaOtdHR0TeTk5OD2MwNw84bjs2kUMbf/GSMClJdXV2qt7dXAVytxw8AK4CkAJI+ErFRTTKIUmdnZ5p8AKpAgCab+iUlJdqWxNOGc3KcMqaKigoF0hWI4tGqfTMO9oyDOpwDsNoP/SI5tAwEKCYdZUVFRdoG5Gl/jEt0uQbn6IN7QbJpPcZAHBgPbbhXkPMyFAo9yQdnS5WDzHiI7NWBMgh+AjQyUo/NRHFMOYFcWVlRyGSFbNJgiR03yzGqRuuSEG5MKpKEEFCO2fM3dajLMW1538k8CeYcx/RNXalsAVns2TMW0eE8AWcv+2OScA3+pk/qSkwioy315FiiPfdOsuAvBDd5kWO3+BDIgcYgGYBkFDNP5rgZ9nK3yZHHbJMxwWETYvmZj0n5ba5w8S0VaQZICBGwJXFEbj5+KZOxACoEiY2szV6a2Q91WDGyH3OcxIKY0JfEcuuV09PT83Z2dnZQFhRSJDCpGGafBC5E8ijAXbL3nYzs745VMwg/y6RChRQhRqrBnBhCjJBg9mOW/2ods0yqSOSiI4kgyQW5g3cqZE7g4uC9hLnIX3mtLSwsPOrr68u9yORVBjJyYzZ5vVHGcX19vTE1NfXif3yxWWmWDefn5wf7+/sNXJ4/EMGGrMmRxB6XuREMBo2JiYlXfILfAX/L5EgLh8OP8QfTwFFl+Hw+A89Lo6amRhOCF4rR0dFhjI+Pv74DO//2TYABAEeK6uSXjRarAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAABPCAYAAAAwe08bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABC5JREFUeNqcV89LG1EQfklWo1GCP7HFIGrUipB4aSESMXjwGOw/IIi3HoVCDwVvLYJ/g/Gghx56EAotFAoW6kWEgtKCoJJglSBSMRJNNHE73+vOdhOVnfpg3ez6vjcz38x8763HNE3FI5VKzW9ubr4qlUrq5uZGjY6Ovp2enn6tqobX+UALGAB4vV7l8XjU2dlZSN0xKkA0sQQArNTU1Kjh4eH3riCM6+tr5fP5VLFYVFtbW89dQeVy2V9bWws3tYuGYRTvAhkVDzQJrgFEv2G1QWLJAAHWb9XU1PTLFUQulWAFAFhqaWlJu4LINQOx1NXVaUIymcwzVxCxpi2BOTDY1ta2J4qJmbPyplzZwyS+UBmnp6chEeUgASBYo7gCru7RJL8FZmBZwp4PNXd1daWfe3p6vrmC4J6TiKOjo6jEvQYQAPdQTkR9UGSJ3QNwaGjoo7g1UOmwuL29nRQ1ISoBQMTm9/svXPNEgDJiAdBqxIAriGIJcLsjycFgMCtpjTLXG8Dt7e17IiJgAa4hpv39/bhYjcAchqg10IQsnrB2n7BUW7JFBdZEZcQxAQhLVB15UZVDH2CxUChoHXTNEwYmA0Q5Ur29veuuIHLnAvFgQFwODw8jIllGPNzuVCHuCkuM+TGZyRgcHPzsCgJbqDumfHd3N+EKwqZm3TXll5eXzeI8cf0R/Tlx7QEA96iDL0REoNV5j+ro6Pgp6ieICigHGel0OiaKiTUPcYlag1sBAEgZNjlxRQCA+32tUb3VlCxCdFwkYXmRLPP2CRfBpjgmVDio7+vr+yopI50jdlEUE7PFtOfz+WZRwXKFY0QikQ+i5PI2AzdFu4bVU4q1T6p7JWwzLJYiyhETnyNgTXSggu4hP/91CiMLZT4OwJpIlpEnphx3kSXLRQ2Ae/e1hlFNBAjgcjo+Pn7iCqLVfZwngEKh0HdJ7ZU5T3Dv/Pz8kYgIEn21s7OjLeVyucd3nhLhSjab9a+srMzFYjGzvr7epI416dBr0reGyTE6L/1nY2MjPjExYVLp6AtrkVWTcmWOj4/fAmorMzMzv4kAPREAvvCM9/jaqQCtrq6+iEajelVMZEt84X08Hq+wpmZnZ3/wPymp9kTnAo2Njeby8vIcgwyciNEGrAv87WQdfPmbA0z+oz+RSOjVYAUxsDUmAr8RVzKZtF00Wltb7XO4U89ZlXg7ZW/0O8q687xXIWPVhWyDAoGALVm8LzlljD/1SDjtvcpLMrXOp34+61W48veLTU1OTr603w0MDHzp6urSAKzqPBKwVnR3d6uxsbFP9kqoiKmpqYKzhKqTvLS09OZW7S0uLs53dnbqCShWEheb9nA4bN5ZsLgWFhbeAejMDR2oTBRzNcjj/AxfW1tLnpychA8ODp5S/vZGRkZS/f39mWr6K0DS4VUPGA8C/RFgANSRANbLNemjAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABPCAYAAADfuSQlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDVJREFUeNqUV0FLG1EQ3mxWowlGVNCgRaPRi6JQyEFJoEix2IK33sSLt/6C3gotFAr23kMxgnjoRYj0D1ih0Fp6sJFgxarVQCNqKkFDoomv820z2zUNO/HBI5vNzJuZ7/vevBeXUkqzj9XV1amTk5PQ4eFhuK2t7cfY2FhsYGDgp2UAB55zc3Pvurq6lMvlwiqqrq5O9fX1qfX19QjbWMbz8/OvYAxDj8ej6uvrzWdd11UoFFKWQzqd9uBhZmYm73a7FSYMMe3PCwsLL60Ii4uLz7u7u83VeFV8IjWeQ0NDZhQddWxvb98/ODgwnclYu76+1mh1jQzNd/jc39/X1tbWHuqbm5uDiUQiAgMrTxqlUskCBgsUi0VtZWXltU4PnlwuZ77EQASsyIb87urqStvZ2RnUCbpCU1OTtRpWhgOMKgfe6dlsNnB6emqmYhjG35flOjga14TF9EAgkOzt7c1yDfiRDfgdLzQ5OflGJ+N0S0tLCt4wxI/shLzhhIIpdc3v96fNFeLx+JORkRFLEnbCmI9IJKIs4sD27OxsBtph0njiO97HYrFXN7QEgU1MTCi7PGCM1cfHx9V/4kOUpaWlZ6Ojo6qxsdEUYGtrq4pGo8quaIMx7ujoKExPT78oFAre5eXlp+fn5xpJWwuHw2/tXBiV5BA6BsncIpGQ+SU5uAEhC5FUkHZ0oIJLwJ+1lEql7jo6ECpFyIFne3v79xt60qoMpAJ2wTJqcnSAAYwhEXyenZ3dcXSgYt3UAKyO0tnZ+c3RgdIpXV5eMgByBBTNrKLoWlIywAMTR7UURJTAA+9r7HnRAUUDIcA7PDz8XqyBYcWgFjQlio9lgcJ9Pt9vKYLVYhBF5IGLpA2kgQ9qXvccHQjSC6STz+dN4iphNarxwOkgPdqBPscItGoBhsxFzTUgHTiJ8rZ3bTjhgJT2gylvcAACg8HgJ0cHoAI4uXMfHR0NiihxSlAtOXsdHTh3RIC8iQ+/KD6WCByobTpriaD0cdcAef39/R/Eou3H7tbW1gOp8xX4fMYkiC+klLxIB/lDsdSYEyLTDQ0NJqR0wmq7u7sRsS9B2kgHjkhRjMAFIy2gJvUl05hhraVVFrknIYLYl1hL3GZEeXMNfEmhg/GjuB/4zoRIx8fHIUemidkc32QQCbcdRwdKxc3SBlLEdk4sGsZgutxmvGLR5Z1mIiV2b+CO9sItP5lMPhJbJZ+gqIVqyIoR+J6HUdMpyilh7O3tRR1hxbW0HMkiUkyJ2wzSogVyUiP7d/ui4nHjlNp90V505T8YvYo0DDigAYBxUd7YQHxkgfGenp4v4vUHEfhGnMlkgmINnHe124xRDVZAygcKpCIeilAqI1XT5QTFcqukS3y8pq7Bf2M2NjYeV62BzjKDrtNFSilJDH9F/qijubn5840Dp5JJaejaLcetHf4IMAAYHwZR2YvoZgAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAKCAYAAAAaY2hnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgpJREFUeNrklr9rIkEUx9/+UMQfqISAgtgEFARFULCx0EaJNikCQSxTiGCTItXhIdflT7DMNd5xxeHZKRG00V6JFoIuFiIBYyMYdZ3MGzKi9ye4X3g7O+/tLOxn35s3QAgBNEVR7LlcbuZyuYjFYiE2m40YjUZitVqJ2Wxm5vV6SalUemm329d8nVaNXer1+l04HKYzIIIgsPF/k2X5EE8kEmQwGFxpGZzQaDRui8Xin263CxQKc4qiCPv9no3ow3v0U3iw2+1Ar9dDKBSCQqHwzel0vn7FPugos79x5orFYjUhk8mQSqXCAOl0OthsNiyI0FAITZIkUFWVzTk8jPt8PqCZCgaD4RDH95y7yuWyIM7ncwYGhdAQCM84NA4PgaCfQ0PfYrGA5XLJoGFcC9C4xNVqdfLhh82PigM9Ll8Okmckj+E78HktlOpoNHLJfr//rd/vXyLA41I7HhHGcanyUvZ4PEDXA+3AB6Ac5Bnrd7PZfJSz2ez9dDr912q1YL1en2QMh4V7H/qxTHlziEajkM/nHyKRyDOFq35ln0ShqRSgdMbg9rVa7ULGDkGzKEnPb786nY59PB7Ddrs92ctwjjKZTOB2uyEejyvpdPp7KpX6CRoUTZAPgWfYZDK57PV6N9Vq9Wk4HNpnsxlrFgiOHoTB4XBAMBhUksnkj0Ag8JcCfAcN61OAAQCaiJsZqdYDqAAAAABJRU5ErkJggg=='
]
// 火柴数字
var MatchNumber = function (options) {
	// 配置元素
	var parts = [
		{
			index: 0,
			type: 'row',
			width: 78,
			height: 11,
			top: 0,
			left: 13
		}, {
			index: 1,
			type: 'col',
			width: 13,
			height: 78,
			top: 0,
			left: 0
		}, {
			index: 2,
			type: 'col',
			width: 12,
			height: 78,
			top: 0,
			left: 91
		}, {
			index: 3,
			type: 'row',
			width: 103,
			height: 10,
			top: 78,
			left: 0
		}, {
			index: 4,
			type: 'col',
			width: 13,
			height: 79,
			top: 88,
			left: 0
		}, {
			index: 5,
			type: 'col',
			width: 12,
			height: 79,
			top: 88,
			left: 91
		}, {
			index: 6,
			type: 'row',
			width: 78,
			height: 10,
			top: 157,
			left: 13
		}
	]
	// 配置数字
	var numbers = [
		{
			number: 0,
			madeof: [0, 1, 2, 4, 5, 6]
		}, {
			number: 1,
			madeof: [2, 5]
		}, {
			number: 2,
			madeof: [0, 2, 3, 4, 6]
		}, {
			number: 3,
			madeof: [0, 2, 3, 5, 6]
		}, {
			number: 4,
			madeof: [1, 2, 3, 5]
		}, {
			number: 5,
			madeof: [0, 1, 3, 5, 6]
		}, {
			number: 6,
			madeof: [0, 1, 3, 4, 5, 6]
		}, {
			number: 7,
			madeof: [0, 2, 5]
		}, {
			number: 8,
			madeof: [0, 1, 2, 3, 4, 5, 6]
		}, {
			number: 9,
			madeof: [0, 1, 2, 3, 5, 6]
		}
	]
	var els = []
	var number = options.number || 0
	// 利用下标
	var initMadeOf = numbers[number].madeof
	var container = document.createElement('div')
	container.className = 'match-clock'
	container.style.width = '103px'
	container.style.height = '167px'
	for (var i = 0; i < parts.length; i++) {
		var params = parts[i]
		var part = document.createElement('div')
		part.className = 'match-part' + ' match-' + params.type + 
			(initMadeOf.indexOf(i) > -1 ? '' : ' hidden')
		part.style.width = params.width + 'px'
		part.style.height = params.height + 'px'
		part.style.top = params.top + 'px'
		part.style.left = params.left + 'px'
		part.style.backgroundImage = 'url(' + imgs[params.index] + ')'
		container.appendChild(part)
		els.push(part)
	}
	var removeElementClass = function (el, _class) {
		var arr = el.className.split(' ')
		var index = arr.indexOf(_class)
		if (index > -1) {
			arr.splice(index, 1)
		}
		el.className = arr.join(' ')
	}
	var addElementClass = function (el, _class) {
		var arr = el.className.split(' ')
		var index = arr.indexOf(_class)
		if (index === -1) {
			arr.push(_class)
		}
		el.className = arr.join(' ')
	}
	// 获取数字, 兼容老版本浏览器
	var getNumber = function (index) {
		var number
		for (var i = 0; i < numbers.length; i++) {
			if (numbers[i].number === index) {
				number = numbers[i]
			}
		}
		return number
	}
	return {
		makeNumber: function (index) {
			var madeof = getNumber(Number(index)).madeof
			for (var i = 0; i < els.length; i++) {
				var show = false
				for (var j = 0; j < madeof.length; j++) {
					if (i === madeof[j]) {
						show = true
						removeElementClass(els[i], 'hidden')
					}
				}
				if (!show) {
					addElementClass(els[i], 'hidden')
				}
			}
		},
		getElement: function () {
			return container
		}
	}
}
// 火柴时钟
var MatchClock = function (options) {
	if (!options.el) {
		return
	}
	// 将一位数字变为两位
	var doubleBit = function (num) {
		return (num >= 0 && num <= 9) ? '0' + num : num
	}
	// 生成最新日期字符数组
	var numbers = function () {
		var numbers = []
		var date = new Date()
		var arr = ('' + doubleBit(date.getHours()) + doubleBit(date.getMinutes()) +
		 	doubleBit(date.getSeconds())).split('')
		for (var i = 0; i < arr.length; i++) {
			numbers.push(arr[i])
		}
		return numbers
	}
	// 记录钟点
	var memory = numbers()
	// 返回数字字符元素
	var getNumberEls = function () {
		var numberEls = []
		for (var i = 0; i < 6; i++) {
			var number = new MatchNumber({
				number: memory[i]
			})
			numberEls.push(number)
		}
		return numberEls
	}
	// 冒号
	var colon = function () {
		var height = 167
		var colon = document.createElement('div')
		colon.className = 'match-clock'
		colon.style.width = '50px'
		colon.style.height = height + 'px'
		for (var i = 0; i < 2; i++) {
			var single = document.createElement('div')
			single.style.width = height / 8 + 'px'
			single.style.height = height / 8 + 'px'
			single.style.borderRadius = '50%'
			single.style.backgroundColor = '#555'
			single.style.margin = height / 4 + 'px auto 10px'
			colon.appendChild(single)
		}
		return colon
	}

	var el = document.getElementById(options.el)
	var scale = options.scale || 1
	var numberEls = getNumberEls()
	numberEls.forEach(function (item, index) {
		// 添加 冒号
		if (index % 2 === 0 && index !== 0) {
			el.appendChild(colon())
		}
		el.appendChild(item.getElement())
	})
	el.style.transform = 'scale(' + scale + ')'

	return {
		start: function () {
			setInterval(function () {
				var reborn = numbers()
				for (var i = 0; i < reborn.length; i++) {
					if (memory[i] !== reborn[i]) {
						numberEls[i].makeNumber(reborn[i])
						memory[i] = reborn[i]
					}
				}
			}, 1000)
		}
	}
}