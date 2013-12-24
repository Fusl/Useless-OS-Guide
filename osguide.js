#!/usr/bin/env node

try {
	var cmenu = require('terminal-menu');
} catch(e) {
	console.error('You need the npm package "terminal-menu" for this script. Install it with "npm install terminal-menu"');
	process.exit(1);
}

var osguide = {
	q: 'Have you got any experience with GNU/Linux?',
	a: {
		'No': {
			q: 'Do you really want to change your OS?',
			a: {
				'Yes': {
					q: 'Need it to look similar to Windows?',
					a: {
						'Yes': [
							'Mint',
							'Zorin OS',
							'PCLinuxOS'
						],
						'No': [
							'Ubuntu LTS',
							'elementaryOS'
						]
					}
				},
				'No': [
					'Mac OS X',
					'Windows'
				],
				'Not sure': [
					'VirtualBox',
					'Live CD / DVD'
				]
			}
		},
		'Yes': {
			q: 'Unix-like OS?',
			a: {
				'Yes': {
					a: {
						'Paid': [
							'Mac OS X',
							'Hackintosh',
							'RHEL',
							'SLED'
						],
						'Free': {
							a: {
								'Research UNIX-like': [
									'Plan 9',
									'plan9front',
									'9atom',
									'MINIX',
									'PureDarwin',
									'LFS'
								],
								'Every day use': {
									a: {
										'GNU/Linux': {
											q: 'Do you care about freedom?',
											a: {
												'Yes': {
													a: {
														'FSF Endorsed': {
															a: {
																'Full featured desktop': [
																	'Trisquel',
																	'Dragora',
																	'BLAG Linux And GNU'
																],
																'Minimal': [
																	'Parabola'
																]
															}
														},
														'Non FSF endorsed': [
															'Debian',
															'Fedora'
														]
													}
												},
												'Not necessarily': {
													q: 'General purpose or oriented distribution?',
													a: {
														'Oriented': {
															a: {
																'Scientific': {
																	a: {
																		'Bioinformatics': [
																			'Bio-Linux',
																		],
																		'General': [
																			'Poseidon Linux',
																			'Fedora Scientific Spin'
																		]
																	}
																},
																'CAD': [
																	'CAELinux'
																],
																'Penetration testing': [
																	'BackTrack Linux',
																	'BackBox Linux'
																],
																'Media centre': [
																	'XBMCbuntu',
																	'GeeXboX'
																],
																'Cloud OS': [
																	'Chromium OS',
																	'Joli OS',
																	'Peppermint Linux OS'
																],
																'Security': [
																	'Tails Live-System',
																	'Privatix Live-System'
																],
																'EDA': [
																	'Fedora Electronic Lab Spin'
																],
																'Multimedia edition': [
																	'Ubuntu Studio',
																	'AV Linux',
																	'Dream Studio',
																	'ArtistX'
																],
																'Games': {
																	a: {
																		'FOSS software only': [
																			'Trisquel Games',
																			'Fedora Games Spin'
																		],
																		'Proprietary software included': [
																			'live.linux-gamers.net',
																			'SuperGamer'
																		]
																	}
																}
															}
														},
														'General': {
															q: 'Desktop or netbook?',
															a: {
																'Netbook': [
																	'Fuduntu'
																],
																'Desktop': {
																	q: 'Do you want to compile packages from source?',
																	a: {
																		'Yes': {
																			q: 'Do you like package managers?',
																			a: {
																				'Yes': [
																					'Gentoo',
																					'Funtoo'
																				],
																				'No': [
																					'Slackware'
																				]
																			}
																		},
																		'Not necessarily': {
																			q: 'Do you like minimalism?',
																			a: {
																				'Yes': {
																					q: 'Do you need to be bleeding edge?',
																					a: {
																						'Yes': [
																							'Archbang',
																							'Archlinux',
																							'Debian Unstable'
																						],
																						'No': {
																							q: 'GUI on by default?',
																							a: {
																								'Available': {
																									q: 'Stable and tested or more up-to-date?',
																									a: {
																										'Stable': [
																											'Debian Stable Netinst'
																										],
																										'Up-to-date': [
																											'Debian Testing Netinst',
																											'Ubuntu Minimal'
																										]
																									}
																								},
																								'Included': [
																									'Crunchbang',
																									'Bodhi Linux',
																									'Tiny Core'
																								]
																							}
																						}
																					}
																				},
																				'I don\'t care': {
																					q: 'Ease of setup?',
																					a: {
																						'More': {
																							q: 'Old or current gen computer?',
																							a: {
																								'Old': [
																									'Xubuntu'
																								],
																								'Older': [
																									'Lubuntu'
																								],
																								'Oldest': [
																									'Puppy Linux',
																									'Porteus',
																									'SliTaz'
																								],
																								'Current': [
																									'Ubuntu',
																									'openSUSE',
																									'Zenwalk Linux'
																								]
																							}
																						},
																						'Less': {
																							q: 'Bleeding edge or stability?',
																							a: {
																								'Bleeding edge': {
																									q: 'Rolling release or regular release?',
																									a: {
																										'Rolling release': {
																											a: {
																												'Opt-rolling': [
																													'openSUSE Tumbleweed',
																													'Fedora Rawhide'
																												],
																												'True-rolling': [
																													'Sabayon'
																												],
																												'Part-rolling': [
																													'Chakra'
																												]
																											}
																										},
																										'Regular release': [
																											'Fedora'
																										]
																									}
																								},
																								'Stability': {
																									a: {
																										'RHEL derivative': [
																											'CentOS',
																											'Scientific Linux'
																										],
																										'Independent': {
																											a: {
																												'Rock-solid stability': [
																													'Debian Stable'
																												],
																												'More up-to-date': [
																													'Frugalware'
																												]
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										},
										'*BSD': {
											q: 'GUI on by default?',
											a: {
												'Yes': {
													a: {
														'KDE': [
															'PC-BSD'
														],
														'GNOME': [
															'GhostBSD'
														]
													}
												},
												'No': {
													a: {
														'X.Org available': [
															'FreeBSD',
															'DragonFlyBSD'
														],
														'X.Org included': [
															'OpenBSD',
															'NetBSD'
														]
													}
												}
											}
										},
										'Other': [
											'Oracle Solaris',
											'OpenIndiana'
										]
									}
								}
							}
						}
					}
				},
				'No': [
					'Syllable',
					'ReactOS',
					'MenuetOS',
					'Haiku',
					'AROS'
				]
			}
		}
	}
};

var makemenu = function (selections) {
	var menu = cmenu({
		width: 50
	});
	menu.reset();
	var mypos = osguide;
	Object.keys(selections).forEach(function (selection) {
		mypos = mypos.a[selections[selection]];
	});
	if (mypos instanceof Array) {
		var longestentry = 0;
		menu.write('Your result:\n');
		Object.keys(mypos).forEach(function (mypos_key) {
			if (mypos[mypos_key].length > longestentry) {
				longestentry = mypos[mypos_key].length;
			}
			menu.write(mypos[mypos_key] + '\n');
		});
		var separator = '';
		for (i = 0; i < longestentry; i++) {
			separator += '-';
		};
		separator += '\n';
		menu.write(separator);
	} else if(mypos.a) {
		if (mypos.q) {
			menu.write(mypos.q + '\n');
			var separator = '';
			for (i = 0; i < mypos.q.length; i++) {
				separator += '-';
			};
			separator += '\n';
			menu.write(separator);
		}
		menu.write('\n');
		Object.keys(mypos.a).forEach(function (answerkey) {
			menu.add(answerkey);
		});
	};
	if(selections.length > 0) {
		menu.add('<< BACK');
	}
	menu.add('<< EXIT');
	menu.once('select', function (label) {
		menu.close();
		parseselect(selections, label);
	});
	menu.createStream().pipe(process.stdout);
};
var parseselect = function (selections, selection) {
	if (selection === '<< BACK') {
		selections = selections.slice(0, -1);
	} else if (selection === '<< EXIT') {
		process.exit(0);
	} else {
		selections.push(selection);
	}
	makemenu(selections);
};

makemenu([]);