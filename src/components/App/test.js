// WORDS
import b1_u1_p1 from '../../Components/Words/1_Macmillan/Unit1/1_PersonalData'
import b1_u1_p2 from '../../Components/Words/1_Macmillan/Unit1/2_Apperance'
import b1_u1_p3 from '../../Components/Words/1_Macmillan/Unit1/3_Clothes'
import b1_u1_p4 from '../../Components/Words/1_Macmillan/Unit1/4_FeaturesOfCharacters'
import b1_u1_p5 from '../../Components/Words/1_Macmillan/Unit1/5_FeelingsAndEmotions'
import b1_u1_p6 from '../../Components/Words/1_Macmillan/Unit1/6_Interests'
import b1_u1_p7 from '../../Components/Words/1_Macmillan/Unit1/7_EthnicalProblems'
import b1_u1_p8 from '../../Components/Words/1_Macmillan/Unit1/8_Orther'


db.collection('books').doc('macmillan').update({
	'unit_01.parts.part_01.name': 'Dane osobowe',
	'unit_01.parts.part_02.name': 'Wygląd zewnętrzny',
	'unit_01.parts.part_03.name': 'Ubrania',
	'unit_01.parts.part_04.name': 'Cechy charakteru',
	'unit_01.parts.part_05.name': 'Uczucia i emocje',
	'unit_01.parts.part_06.name': 'Zainteresowania',
	'unit_01.parts.part_07.name': 'Problemy etyczne',
	'unit_01.parts.part_08.name': 'Inne',
	
	'unit_02.parts.part_01.name': 'Miejsce zamieszkania',
	'unit_02.parts.part_02.name': 'Opis domu',
	'unit_02.parts.part_03.name': 'Prace w domu i ogrodzie',
	'unit_02.parts.part_04.name': 'Wynajem, kupno i sprzedaż nieruchomości',
	'unit_02.parts.part_05.name': 'Inne',

	'unit_03.parts.part_01.name': 'Przedmioty szkolne',
	'unit_03.parts.part_02.name': 'Oceny i wymagania',
	'unit_03.parts.part_03.name': 'Życie szkolne',
	'unit_03.parts.part_04.name': 'Zajęcia pozalekcyjne',
	'unit_03.parts.part_05.name': 'System oświaty',
	'unit_03.parts.part_06.name': 'Inne',
		
	'unit_04.parts.part_01.name': 'Zawody i związane z nimi czynności',
	'unit_04.parts.part_02.name': 'Warunki pracy i zatrudnienia',
	'unit_04.parts.part_03.name': 'Praca dorywcza',
	'unit_04.parts.part_04.name': 'Rynek pracy',
	'unit_04.parts.part_05.name': 'Inne',
	
	'unit_05.parts.part_01.name': 'Etapy życia',
	'unit_05.parts.part_02.name': 'Członkowie rodziny, koledzy i przyjaciele',
	'unit_05.parts.part_03.name': 'Czynności życia codziennego',
	'unit_05.parts.part_04.name': 'Formy spędzania czasu wolnego',
	'unit_05.parts.part_05.name': 'Święta i uroczystości',
	'unit_05.parts.part_06.name': 'Styl życia, konflikty i problemy',
	'unit_05.parts.part_07.name': 'Inne',
	
	'unit_06.parts.part_01.name': 'Artykuły spożywcze',
	'unit_06.parts.part_02.name': 'Posiłki i ich przygotowanie',
	'unit_06.parts.part_03.name': 'Lokale gastronomiczne',
	'unit_06.parts.part_04.name': 'Dieting',
	'unit_06.parts.part_05.name': 'Inne',
	
	'unit_07.parts.part_01.name': 'Rodzaje sklepów',
	'unit_07.parts.part_02.name': 'Opisywanie towarów',
	'unit_07.parts.part_03.name': 'Sprzedawanie i kupowanie',
	'unit_07.parts.part_04.name': 'Reklamacje',
	'unit_07.parts.part_05.name': 'Reklama',
	'unit_07.parts.part_06.name': 'Korzystanie z uslug',
	'unit_07.parts.part_07.name': 'Środki platnicze',
	'unit_07.parts.part_08.name': 'Banki',
	'unit_07.parts.part_09.name': 'Ubezpieczenie',
	'unit_07.parts.part_10.name': 'Inne',

	'unit_08.parts.part_01.name': 'Podróżowanie i środki transportu',
	'unit_08.parts.part_02.name': 'Informacja turystyczna',
	'unit_08.parts.part_03.name': 'Baza noclegowa',
	'unit_08.parts.part_04.name': 'Wycieczki i zwiedzanie',
	'unit_08.parts.part_05.name': 'Wypadki',
	'unit_08.parts.part_06.name': 'Inne',
	
	'unit_09.parts.part_01.name': 'Dziedziny kultury',
	'unit_09.parts.part_02.name': 'Twórcy i ich dziela',
	'unit_09.parts.part_03.name': 'Uczestnictwo w kulturze',
	'unit_09.parts.part_04.name': 'Media',
	'unit_09.parts.part_05.name': 'Inne',
	
	'unit_10.parts.part_01.name': 'Dyscypliny sportu',
	'unit_10.parts.part_02.name': 'Imprezy sportowe',
	'unit_10.parts.part_03.name': 'Sport wyczynowy',
	'unit_10.parts.part_04.name': 'Inne',
	
	// 'unit_02.parts.part_01.name': 'Inne',
	// 'unit_02.parts.part_02.name': 'Inne',
	// 'unit_02.parts.part_03.name': 'Inne',
	// 'unit_02.parts.part_04.name': 'Inne',
	// 'unit_02.parts.part_05.name': 'Inne',
	// 'unit_02.parts.part_06.name': 'Inne',
	// 'unit_02.parts.part_07.name': 'Inne',
	// 'unit_02.parts.part_08.name': 'Inne',
	// 'unit_02.parts.part_09.name': 'Inne',
})

db.collection('books').doc('macmillan').update({
	unit_01: {
		title: 'Człowiek',
		parts: {
			part_01: {
				name: b1_u1_p1[0].type,
				words: b1_u1_p1
			},
			part_02: {
				name: b1_u1_p2[0].type,
				words: b1_u1_p2
			},
			part_03: {
				name: b1_u1_p3[0].type,
				words: b1_u1_p3
			},
			part_04: {
				name: b1_u1_p4[0].type,
				words: b1_u1_p4
			},
			part_05: {
				name: b1_u1_p5[0].type,
				words: b1_u1_p5
			},
			part_06: {
				name: b1_u1_p6[0].type,
				words: b1_u1_p6
			},
			part_07: {
				name: b1_u1_p7[0].type,
				words: b1_u1_p7
			},
			part_08: {
				name: b1_u1_p8[0].type,
				words: b1_u1_p8
			}
		}
	}
})

db.collection('users').doc(user.uid).update({
	points: {
		experience: 99,
		books: {
			book_01: {
				name: 'Macmillan',
				units: {
					unit_01: {
						title: 'Człowiek',
						parts: {
							part_01: {
								name: 'Dane osobowe',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Wygląd zewnętrzny',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Ubrania',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Cechy charakteru',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Uczucia i emocje',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Zainteresowania',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Problemy etyczne',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_02: {
						title: 'Dom',
						parts: {
							part_01: {
								name: 'Miejsce zamieszkania',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Opis Domu',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Prace w domu i ogrodzie',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Wynajem, kupno i sprzedaż nieruchomości',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_03: {
						title: 'Szkoła',
						parts: {
							part_01: {
								name: 'Przedmioty szkolne',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Oceny i wymagania',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Życie szkolne',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Zajęcia pozalekcyjne',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'System oświaty',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_04: {
						title: 'Praca',
						parts: {
							part_01: {
								name: 'Zawody i związane z nimi czynności',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Warunki pracy i zatrudnienia',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Praca dorywcza',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Rynek pracy',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_05: {
						title: 'Życie rodzinne i towarzyskie',
						parts: {
							part_01: {
								name: 'Etapy życia',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Członkowie rodziny, koledzy i przyjaciele',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Czynności życia codziennego',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Formy spędzania czasu wolnego',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Święta i uroczystości',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Styl życia, konflikty i problemy',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_06: {
						title: 'Żywienie',
						parts: {
							part_01: {
								name: 'Artykuły spożywcze',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Posiłki i ich przygotowanie',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Lokale gastronomiczne',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Diety',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_07: {
						title: 'Zakupy i usługi',
						parts: {
							part_01: {
								name: 'Rodzaje sklepów',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Opisywanie towarów',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Sprzedawanie i kupowanie',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Reklamacje',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Reklama',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Korzystanie z usług',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Środki płatnicze',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Banki',
								points: 0,
								level: 1
							},
							part_09: {
								name: 'Ubezpieczenie',
								points: 0,
								level: 1
							},
							part_10: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_08: {
						title: 'Podróżowanie i turystyka',
						parts: {
							part_01: {
								name: 'Podróżowanie i środki transportu',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Informacja turystyczna',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Baza noclegowa',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Wycieczki i zwiedzanie',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Wypadki',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_09: {
						title: 'Kultura',
						parts: {
							part_01: {
								name: 'Dziedziny kultury',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Twórcy i ich dzieła',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Uczestnictwo w kulturze',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Media',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_10: {
						title: 'Sport',
						parts: {
							part_01: {
								name: 'Dyscypliny sportu',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Imprezy sportowe',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Sport wyczynowy',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_11: {
						title: 'Zdrowie',
						parts: {
							part_01: {
								name: 'Samopoczucie',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Częsci ciała',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Zdrowy styl życia',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Uzależnienia',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Ochrona zdrowia',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_12: {
						title: 'Nauka i technika',
						parts: {
							part_01: {
								name: 'Dziedziny nauki i naukowcy',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Wynalazki i odkrycia',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Badania naukowe',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Korzystanie z urządzeń technicznych',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Technologie informacyjno-komunikacyjne',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Awarie techniczne',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_13: {
						title: 'Świat przyrody',
						parts: {
							part_01: {
								name: 'Pogoda i klimat',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Świat roślin i zwierząt',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Krajobraz',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Zagrożenia środowiska naturalnego',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Ochrona środowiska naturalnego',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Klęski żywiołowe',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Przestrzeń kosmiczna',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_14: {
						title: 'Państwo i społeczeństwo',
						parts: {
							part_01: {
								name: 'Struktura państwa i urzędy',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Organizacje społeczne i międzynarodowe',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Konflikty wewnętrzne i międzynarodowe',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Przestępczość',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Wymiar sprawiedliwości',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Polityka społeczna',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Gospodarka',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Inne',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					}
				}
			},
			book_02: {
				name: 'WSiP',
				units: {
					unit_01: {
						title: 'Podróże',
						parts: {
							part_01: {
								name: 'Rzeczowniki',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Strony świata',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Pytania o miejsce i kierunek',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Pory roku i nazwy miesięcy',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Zjawiska Pogodowe',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Typy krajobrazu Rosji',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Przyroda',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Aktywny wypoczynek',
								points: 0,
								level: 1
							},
							part_09: {
								name: 'Wyposażenie turysty',
								points: 0,
								level: 1
							},
							part_10: {
								name: 'Czasowniki',
								points: 0,
								level: 1
							},
							part_11: {
								name: 'Zwroty i wyrażenia',
								points: 0,
								level: 1
							},
							part_12: {
								name: 'Przyimki',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_02: {
						title: 'W stolicy Polski',
						parts: {
							part_01: {
								name: 'Rzeczowniki',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Rzeczowniki nieodmienne',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Określanie czasu',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Sztuka',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Kolej',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Kolory',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Przyimki',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Przymiotniki',
								points: 0,
								level: 1
							},
							part_09: {
								name: 'Czasowniki',
								points: 0,
								level: 1
							},
							part_10: {
								name: 'Przysłówki',
								points: 0,
								level: 1
							},
							part_11: {
								name: 'Liczebniki główne',
								points: 0,
								level: 1
							},
							part_12: {
								name: 'Zwroty i wyrażenia',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_03: {
						title: 'Wśród przyjaciół',
						parts: {
							part_01: {
								name: 'Rzeczowniki',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Rodzaje budynków mieszkalnych',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Rodzaje pomieszczeń',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Wygląd zewnętrzny człowieka',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Przymiotniki',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Czasowniki',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Określenia położenia',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Zwroty i wyrażenia',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					}
				}
			},
			book_03: {
				name: 'Język angielski zawodowy',
				units: {
					unit_01: {
						title: 'Podróże',
						parts: {
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_02: {
						title: 'W stolicy Polski',
						parts: {
							part_01: {
								name: 'Rzeczowniki',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Rzeczowniki nieodmienne',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Określanie czasu',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Sztuka',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Kolej',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Kolory',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Przyimki',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Przymiotniki',
								points: 0,
								level: 1
							},
							part_09: {
								name: 'Czasowniki',
								points: 0,
								level: 1
							},
							part_10: {
								name: 'Przysłówki',
								points: 0,
								level: 1
							},
							part_11: {
								name: 'Liczebniki główne',
								points: 0,
								level: 1
							},
							part_12: {
								name: 'Zwroty i wyrażenia',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					},
					unit_03: {
						title: 'Wśród przyjaciół',
						parts: {
							part_01: {
								name: 'Rzeczowniki',
								points: 0,
								level: 1
							},
							part_02: {
								name: 'Rodzaje budynków mieszkalnych',
								points: 0,
								level: 1
							},
							part_03: {
								name: 'Rodzaje pomieszczeń',
								points: 0,
								level: 1
							},
							part_04: {
								name: 'Wygląd zewnętrzny człowieka',
								points: 0,
								level: 1
							},
							part_05: {
								name: 'Przymiotniki',
								points: 0,
								level: 1
							},
							part_06: {
								name: 'Czasowniki',
								points: 0,
								level: 1
							},
							part_07: {
								name: 'Określenia położenia',
								points: 0,
								level: 1
							},
							part_08: {
								name: 'Zwroty i wyrażenia',
								points: 0,
								level: 1
							},
							test: {
								name: 'Test',
								points: 0,
								level: 1
							}
						}
					}
				}
			},
		}
	}
});


// 	db.collection('users').doc(user.uid).update({
			// 		'points.books.book_03': {
			// 			name: 'Język angielski zawodowy',
			// 			units: {
			// 				unit_01: {
			// 					parts: {
			// 						test: {
			// 							level: 1,
			// 							name: 'Podstawowa terminologia',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_02: {
			// 					parts: {
			// 						part_01: {
			// 							level: 1,
			// 							name: 'Jednostki miar i wag',
			// 							points: 0
			// 						},
			// 						part_02: {
			// 							level: 1,
			// 							name: 'Liczby porządkowe, miesiące i dni tygodnia',
			// 							points: 0
			// 						},
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_03: {
			// 					parts: {
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_04: {
			// 					parts: {
			// 						part_01: {
			// 							level: 1,
			// 							name: 'Środki transportu',
			// 							points: 0
			// 						},
			// 						part_02: {
			// 							level: 1,
			// 							name: 'Użyteczne zwroty',
			// 							points: 0
			// 						},
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_05: {
			// 					parts: {
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_06: {
			// 					parts: {
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 				unit_07: {
			// 					parts: {
			// 						test: {
			// 							level: 1,
			// 							name: 'Test',
			// 							points: 0
			// 						},
			// 					}
			// 				},
			// 			}
			// 		}
			// 	})
			
				db.collection('books').doc('jezyk-angielski-zawodowy').update({
							unit_01: {
								parts: {
									part_01: {
										name: 'Podstawowa terminologia',
									},
								}
							},
							unit_02: {
								parts: {
									part_01: {
										words: ww,
										name: 'Jednostki miar i wag',
									},
									part_02: {
										words: ww,
										name: 'Liczby porządkowe, miesiące i dni tygodnia',
									}
								}
							},
							unit_03: {
								parts: {
									part_01: {
										words: ww,
										name: 'Skróty używane w logistyce',
									},
								}
							},
							unit_04: {
								parts: {
									part_01: {
										words: ww,
										name: 'Środki transportu',
									},
									part_02: {
										words: ww,
										name: 'Użyteczne zwroty',
									},
								}
							},
							unit_05: {
								parts: {
									part_01: {
										words: ww,
										name: 'Magazyny',
									},
								}
							},
							unit_06: {
								parts: {
									part_01: {
										words: ww,
										name: 'Materiały i towary',
									},
								}
							},
							unit_07: {
								parts: {
									part_01: {
										words: ww,
										name: 'Test',
									},
								}
							},
				})