// // screens/DashboardScreen.js
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useEffect, useRef } from 'react';
// import {
//     Animated,
//     Dimensions,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View
// } from 'react-native';

// const { width } = Dimensions.get('window');

// export default function DashboardScreen() {
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(50)).current;
//   const cardAnim1 = useRef(new Animated.Value(0)).current;
//   const cardAnim2 = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Staggered animation entrance
//     Animated.sequence([
//       Animated.parallel([
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 800,
//           useNativeDriver: true,
//         }),
//         Animated.timing(slideAnim, {
//           toValue: 0,
//           duration: 800,
//           useNativeDriver: true,
//         }),
//       ]),
//       Animated.stagger(200, [
//         Animated.timing(cardAnim1, {
//           toValue: 1,
//           duration: 600,
//           useNativeDriver: true,
//         }),
//         Animated.timing(cardAnim2, {
//           toValue: 1,
//           duration: 600,
//           useNativeDriver: true,
//         }),
//       ]),
//     ]).start();
//   }, []);

//   const AnimatedCard = ({ children, animValue, delay = 0 }) => (
//     <Animated.View
//       style={{
//         opacity: animValue,
//         transform: [
//           {
//             translateY: animValue.interpolate({
//               inputRange: [0, 1],
//               outputRange: [30, 0],
//             }),
//           },
//           {
//             scale: animValue.interpolate({
//               inputRange: [0, 1],
//               outputRange: [0.95, 1],
//             }),
//           },
//         ],
//       }}
//     >
//       {children}
//     </Animated.View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0b3d91" />
      
//       {/* Animated Header with Gradient Overlay */}
//       <Animated.View 
//         style={[
//           styles.headerContainer,
//           {
//             opacity: fadeAnim,
//             transform: [{ translateY: slideAnim }],
//           },
//         ]}
//       >
//         <LinearGradient
//           colors={['#0b3d91', '#1a467a', '#27496d']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.headerGradient}
//         >
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.greeting}>Good Morning</Text>
//               <Text style={styles.welcome}>Welcome Back !</Text>
//             </View>
//             <View style={styles.icons}>
//               <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
//                 <Ionicons name="notifications-outline" size={24} color="white" />
//                 <View style={styles.notificationBadge}>
//                   <Text style={styles.badgeText}>2</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
//                 <Ionicons name="person-circle-outline" size={28} color="white" />
//               </TouchableOpacity>
//             </View>
//           </View>
          
//           {/* Balance Overview Card */}
//           <View style={styles.balanceOverview}>
//             <Text style={styles.totalBalanceLabel}>Total Balance</Text>
//             <Text style={styles.totalBalance}>$6,004,000.05</Text>
//             <View style={styles.balanceDetails}>
//               <View style={styles.balanceItem}>
//                 <Ionicons name="trending-up" size={16} color="#4CAF50" />
//                 <Text style={styles.balanceChange}>+2.5% this month</Text>
//               </View>
//             </View>
//           </View>
//         </LinearGradient>
//       </Animated.View>

//       {/* Enhanced Tabs with Glassmorphism */}
//       <Animated.View 
//         style={[
//           styles.tabsContainer,
//           {
//             opacity: fadeAnim,
//           },
//         ]}
//       >
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
//           <View style={styles.tabsContent}>
//             {['My Citi', 'Banking', 'Credit Cards', 'Investments', 'Loans'].map((tab, index) => (
//               <TouchableOpacity key={index} activeOpacity={0.7}>
//                 <View style={[styles.tabContainer, tab === 'My Citi' && styles.activeTabContainer]}>
//                   <Text style={[styles.tab, tab === 'My Citi' && styles.activeTab]}>
//                     {tab}
//                   </Text>
//                   {tab === 'My Citi' && <View style={styles.activeIndicator} />}
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//       </Animated.View>

//       {/* Enhanced Accounts Section */}
//       <ScrollView style={styles.accountsContainer} showsVerticalScrollIndicator={false}>
//         {/* Quick Actions */}
//         <Animated.View 
//           style={[
//             styles.quickActionsContainer,
//             {
//               opacity: fadeAnim,
//               transform: [{ translateY: slideAnim }],
//             },
//           ]}
//         >
//           <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.quickActions}>
//               {[
//                 { icon: 'paper-plane-outline', label: 'Send Money', color: '#FF6B6B' },
//                 { icon: 'download-outline', label: 'Deposit', color: '#4ECDC4' },
//                 { icon: 'card-outline', label: 'Pay Bills', color: '#45B7D1' },
//                 { icon: 'analytics-outline', label: 'Insights', color: '#96CEB4' },
//               ].map((action, index) => (
//                 <TouchableOpacity key={index} style={styles.quickActionItem} activeOpacity={0.8}>
//                   <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
//                     <Ionicons name={action.icon} size={24} color="white" />
//                   </View>
//                   <Text style={styles.quickActionLabel}>{action.label}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//         </Animated.View>

//         {/* Checking Account */}
//         <Text style={styles.sectionTitle}>ACCOUNTS</Text>
//         <AnimatedCard animValue={cardAnim1}>
//           <LinearGradient 
//             colors={['#667eea', '#764ba2']} 
//             style={styles.card}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//           >
//             <View style={styles.cardHeader}>
//               <View style={styles.cardTypeContainer}>
//                 <Ionicons name="card-outline" size={20} color="#fff" />
//                 <Text style={styles.cardType}>CHECKING</Text>
//               </View>
//               <TouchableOpacity style={styles.moreButton} activeOpacity={0.7}>
//                 <Ionicons name="ellipsis-horizontal" size={18} color="#fff" />
//               </TouchableOpacity>
//             </View>
            
//             <View style={styles.cardContent}>
//               <Text style={styles.amount}>$4,004,000.05</Text>
//               <Text style={styles.subText}>Available Balance</Text>
//               <View style={styles.cardBottom}>
//                 <Text style={styles.accountName}>Access Account</Text>
//                 <Text style={styles.accountNumber}>••••109</Text>
//               </View>
//             </View>
            
//             {/* Card Design Elements */}
//             <View style={styles.cardPattern}>
//               <View style={[styles.circle, { top: -20, right: -20 }]} />
//               <View style={[styles.circle, { bottom: -30, left: -30, opacity: 0.3 }]} />
//             </View>
//           </LinearGradient>
//         </AnimatedCard>

//         {/* Savings Account */}
//         <AnimatedCard animValue={cardAnim2}>
//           <LinearGradient 
//             colors={['#ff9a9e', '#fecfef', '#fecfef']} 
//             style={styles.card}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//           >
//             <View style={styles.cardHeader}>
//               <View style={styles.cardTypeContainer}>
//                 <Ionicons name="shield-checkmark-outline" size={20} color="#fff" />
//                 <Text style={styles.cardType}>CHECKING</Text>
//               </View>
//               <View style={styles.closedBadge}>
//                 <Text style={styles.closedText}>CLOSED</Text>
//               </View>
//             </View>
            
//             <View style={styles.cardContent}>
//               <Text style={[styles.amount, { opacity: 0.7 }]}>$2,000,000.00</Text>
//               <Text style={styles.subText}>Account Closed</Text>
//               <View style={styles.cardBottom}>
//                 <Text style={styles.accountName}>Citi® Savings Account</Text>
//                 <Text style={styles.accountNumber}>••••112</Text>
//               </View>
//             </View>
            
//             {/* Card Design Elements */}
//             <View style={styles.cardPattern}>
//               <View style={[styles.circle, { top: -20, right: -20, opacity: 0.2 }]} />
//               <View style={[styles.circle, { bottom: -30, left: -30, opacity: 0.1 }]} />
//             </View>
//           </LinearGradient>
//         </AnimatedCard>

//         {/* Enhanced Action Buttons */}
//         <Animated.View 
//           style={[
//             styles.actionRow,
//             {
//               opacity: cardAnim2,
//               transform: [
//                 {
//                   translateY: cardAnim2.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [20, 0],
//                   }),
//                 },
//               ],
//             },
//           ]}
//         >
//           {[
//             { label: 'Transfer', icon: 'swap-horizontal-outline', color: '#667eea' },
//             { label: 'Pay Bills', icon: 'receipt-outline', color: '#f093fb' },
//             { label: 'Deposit', icon: 'add-circle-outline', color: '#4facfe' },
//           ].map((action, i) => (
//             <TouchableOpacity key={i} style={styles.actionBtn} activeOpacity={0.8}>
//               <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
//                 <Ionicons name={action.icon} size={20} color="white" />
//               </View>
//               <Text style={styles.actionText}>{action.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </Animated.View>

//         {/* Recent Transactions Preview */}
//         <Animated.View 
//           style={[
//             styles.transactionsPreview,
//             {
//               opacity: cardAnim2,
//             },
//           ]}
//         >
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
//             <TouchableOpacity activeOpacity={0.7}>
//               <Text style={styles.viewAllText}>View All</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.transactionItem}>
//             <View style={styles.transactionIcon}>
//               <Ionicons name="cafe-outline" size={18} color="#FF6B6B" />
//             </View>
//             <View style={styles.transactionDetails}>
//               <Text style={styles.transactionTitle}>Starbucks Coffee</Text>
//               <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
//             </View>
//             <Text style={styles.transactionAmount}>-$4.95</Text>
//           </View>
//         </Animated.View>
//       </ScrollView>

//       {/* Enhanced Bottom Navigation with Glassmorphism */}
//       <Animated.View 
//         style={[
//           styles.bottomNav,
//           {
//             opacity: fadeAnim,
//           },
//         ]}
//       >
//         {[
//           { icon: 'home', label: 'Home', active: true },
//           { icon: 'card-outline', label: 'Cards' },
//           { icon: 'analytics', label: 'Analytics' },
//           { icon: 'person', label: 'Profile' },
//         ].map((item, i) => (
//           <TouchableOpacity key={i} style={styles.navItem} activeOpacity={0.7}>
//             <View style={[styles.navIconContainer, item.active && styles.activeNavItem]}>
//               <Ionicons 
//                 name={item.icon} 
//                 size={22} 
//                 color={item.active ? '#fff' : '#0074cc'} 
//               />
//             </View>
//             <Text style={[styles.navLabel, item.active && styles.activeNavLabel]}>
//               {item.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#f8fafc' 
//   },
  
//   // Header Styles
//   headerContainer: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   headerGradient: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingTop: 60,
//     paddingHorizontal: 24,
//     paddingBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   greeting: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.8)',
//     fontWeight: '400',
//   },
//   welcome: { 
//     fontSize: 28, 
//     color: '#fff', 
//     fontWeight: 'bold',
//     marginTop: 4,
//   },
//   icons: { 
//     flexDirection: 'row', 
//     alignItems: 'center',
//     gap: 16,
//   },
//   iconButton: {
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 10,
//     width: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
  
//   // Balance Overview
//   balanceOverview: {
//     marginHorizontal: 24,
//     backgroundColor: 'rgba(255,255,255,0.15)',
//     borderRadius: 16,
//     padding: 20,
//     backdropFilter: 'blur(10px)',
//   },
//   totalBalanceLabel: {
//     color: 'rgba(255,255,255,0.8)',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   totalBalance: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   balanceDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   balanceItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },
//   balanceChange: {
//     color: '#4CAF50',
//     fontSize: 14,
//     fontWeight: '600',
//   },

//   // Tabs
//   tabsContainer: {
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     backdropFilter: 'blur(10px)',
//   },
//   tabs: {
//     maxHeight: 60,
//   },
//   tabsContent: {
//     flexDirection: 'row',
//     paddingHorizontal: 24,
//     paddingVertical: 16,
//     alignItems: 'center',
//     gap: 8,
//   },
//   tabContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     position: 'relative',
//   },
//   activeTabContainer: {
//     backgroundColor: '#0074cc',
//   },
//   tab: { 
//     color: '#666', 
//     fontSize: 14, 
//     fontWeight: '600',
//   },
//   activeTab: { 
//     color: '#fff', 
//     fontWeight: 'bold',
//   },
//   activeIndicator: {
//     position: 'absolute',
//     bottom: -2,
//     left: '50%',
//     marginLeft: -3,
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: '#fff',
//   },

//   // Main Content
//   accountsContainer: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 24,
//   },

//   // Quick Actions
//   quickActionsContainer: {
//     marginBottom: 24,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   quickActionItem: {
//     alignItems: 'center',
//     marginRight: 8,
//   },
//   quickActionIcon: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   quickActionLabel: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//     textAlign: 'center',
//   },

//   // Section Headers
//   sectionTitle: {
//     fontWeight: '700',
//     fontSize: 13,
//     marginBottom: 16,
//     color: '#666',
//     letterSpacing: 1,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   viewAllText: {
//     color: '#0074cc',
//     fontWeight: '600',
//     fontSize: 14,
//   },

//   // Enhanced Cards
//   card: {
//     borderRadius: 20,
//     padding: 24,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.15,
//     shadowRadius: 16,
//     elevation: 8,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   cardTypeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   cardType: {
//     color: 'rgba(255,255,255,0.9)',
//     fontSize: 12,
//     fontWeight: 'bold',
//     letterSpacing: 1,
//   },
//   moreButton: {
//     padding: 4,
//   },
//   closedBadge: {
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   closedText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   cardContent: {
//     position: 'relative',
//     zIndex: 2,
//   },
//   amount: { 
//     fontSize: 32, 
//     color: '#fff', 
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   subText: { 
//     color: 'rgba(255,255,255,0.8)', 
//     fontSize: 14,
//     marginBottom: 16,
//     fontWeight: '500',
//   },
//   cardBottom: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   accountName: { 
//     color: '#fff', 
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   accountNumber: {
//     color: 'rgba(255,255,255,0.8)',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   cardPattern: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   circle: {
//     position: 'absolute',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//   },

//   // Action Buttons
//   actionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 32,
//     gap: 12,
//   },
//   actionBtn: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 16,
//     flex: 1,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 12,
//     elevation: 4,
//   },
//   actionIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   actionText: { 
//     color: '#333', 
//     fontWeight: '600', 
//     fontSize: 13,
//   },

//   // Transactions
//   transactionsPreview: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   transactionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   transactionIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f8fafc',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   transactionDetails: {
//     flex: 1,
//   },
//   transactionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 2,
//   },
//   transactionDate: {
//     fontSize: 13,
//     color: '#666',
//   },
//   transactionAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },

//   // Bottom Navigation
//   bottomNav: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     backdropFilter: 'blur(20px)',
//     paddingVertical: 16,
//     paddingBottom: 32,
//     paddingHorizontal: 24,
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(0,0,0,0.05)',
//     justifyContent: 'space-around',
//   },
//   navItem: { 
//     alignItems: 'center',
//     flex: 1,
//   },
//   navIconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   activeNavItem: {
//     backgroundColor: '#0074cc',
//   },
//   navLabel: { 
//     fontSize: 11, 
//     color: '#0074cc', 
//     fontWeight: '600',
//   },
//   activeNavLabel: {
//     color: '#0074cc',
//     fontWeight: 'bold',
//   },
// });